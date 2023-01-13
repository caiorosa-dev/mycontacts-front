import PropTypes from 'prop-types';
import {
  forwardRef, useEffect, useImperativeHandle, useState,
} from 'react';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import FormGroup from './FormGroup';
import { Form } from './styles';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';
import CategoriesService from '../../services/CategoriesService';
import clearFormat from '../../utils/clearFormat';

const ContactForm = forwardRef(({ buttonText, onSubmit }, ref) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const [categories, setCategories] = useState([]);
  const [isLoadingCategories, setLoadingCategories] = useState(true);
  const [isSubmitting, setSubmitting] = useState(false);

  const {
    addError, removeError, getErrorMessageByFieldName, isValidToSubmit,
  } = useErrors();

  const isFormValid = (isValidToSubmit() && name);

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
  }, []);

  useImperativeHandle(ref, () => ({
    setFieldsValue(contact) {
      setName(contact.name ?? '');
      setEmail(contact.email ?? '');
      setPhone(clearFormat(contact.phone ?? ''));
      setCategoryId(formatPhone(contact.category_id ?? ''));
    },
  }), []);

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

    setName('');
    setEmail('');
    setPhone('');
    setCategoryId('');

    setSubmitting(false);
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input placeholder="Nome *" name="name" error={getErrorMessageByFieldName('name')} disabled={isSubmitting} value={name} onChange={(event) => handleNameChange(event.target.value)} />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input placeholder="E-Mail" type="email" name="email" error={getErrorMessageByFieldName('email')} disabled={isSubmitting} value={email} onChange={(event) => handleEmailChange(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" name="phone" value={phone} disabled={isSubmitting} onChange={(event) => handlePhoneChange(event.target.value)} maxLength="15" />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select name="categoryId" value={categoryId} disabled={isLoadingCategories || isSubmitting} onChange={(event) => setCategoryId(event.target.value)}>
          <option value="">Sem Categoria</option>
          { categories
            .map(
              (object) => (<option key={object.id} value={object.id}>{object.name}</option>),
            ) }
        </Select>
      </FormGroup>

      <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
        { buttonText }
      </Button>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
