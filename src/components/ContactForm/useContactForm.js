import {
  useEffect, useImperativeHandle, useState,
} from 'react';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import useSafeAsyncState from '../../hooks/useSafeAsyncState';

export default function useContactForm(onSubmit, ref) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const [categories, setCategories] = useSafeAsyncState([]);
  const [isLoadingCategories, setLoadingCategories] = useSafeAsyncState(true);
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    addError, removeError, getErrorMessageByFieldName, isValidToSubmit,
  } = useErrors();

  const isFormValid = (isValidToSubmit() && name);

  useImperativeHandle(ref, () => ({
    setFieldsValue(contact) {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(formatPhone(contact.phone ?? ''));
      setCategoryId(contact.categoryId ?? '');
    },
    resetFields() {
      setName('');
      setEmail('');
      setPhone('');
      setCategoryId('');
    },
  }), []);

  useEffect(() => {
    async function loadCategories() {
      setLoadingCategories(true);

      try {
        const data = await CategoriesService.list();

        setCategories(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingCategories(false);
      }
    }

    loadCategories();
  }, [setCategories, setLoadingCategories]);

  function handleNameChange(value) {
    setName(value);

    if (!value) {
      addError({ field: 'name', message: 'O nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(value) {
    setEmail(value);

    if (!isEmailValid(value)) {
      addError({ field: 'email', message: 'O e-mail está inválido.' });
      return;
    }

    removeError('email');
  }

  function handlePhoneChange(value) {
    setPhone(formatPhone(value));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSubmitting(true);

    await onSubmit({
      name, email, phone, categoryId,
    });

    setSubmitting(false);
  }

  return {
    handleSubmit,
    getErrorMessageByFieldName,
    isSubmitting,
    name,
    handleNameChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
  };
}
