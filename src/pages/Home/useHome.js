import { CanceledError } from 'axios';
import {
  useCallback, useDeferredValue, useEffect, useMemo, useState,
} from 'react';
import useAnimatedList from '../../hooks/useAnimatedList';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useHome() {
  const {
    items: contacts,
    setItems: setContacts,
    renderList,
    handleRemoveItem,
  } = useAnimatedList();

  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [contactBeingDelete, setContactBeingDelete] = useState({});
  const [isLoadingDelete, setLoadingDelete] = useState(false);

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  )), [contacts, deferredSearchTerm]);

  const loadContacts = useCallback(async (signal) => {
    setLoading(true);

    try {
      const data = await ContactsService.list(signal, orderBy);

      if (!data) {
        setHasError(true);
        return;
      }

      setHasError(false);
      setContacts(data);
    } catch (err) {
      if (err instanceof CanceledError) return;
      setHasError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [orderBy, setContacts]);

  useEffect(() => {
    const controller = new AbortController();

    loadContacts(controller.signal);

    return () => {
      controller.abort();
    };
  }, [loadContacts]);

  function handleTryLoadContacts() {
    loadContacts();
  }

  const handleOrderToggle = useCallback(() => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }, []);

  const handleDeleteContact = useCallback((contact) => {
    setContactBeingDelete(contact);
    setDeleteModalVisible(true);
  }, []);

  function handleCloseDeleteModal() {
    setDeleteModalVisible(false);
  }

  async function handleConfirmDeleteModal() {
    setLoadingDelete(true);

    try {
      await ContactsService.delete(contactBeingDelete.id);

      handleRemoveItem(contactBeingDelete.id);
      handleCloseDeleteModal();
      toast({ type: 'success', text: 'O contato deletado com sucesso!' });
    } catch (err) {
      toast({ type: 'danger', text: 'Ocorreu um erro ao deletar o contato!' });
    } finally {
      setLoadingDelete(false);
    }
  }

  return {
    isLoading,
    contactBeingDelete,
    isDeleteModalVisible,
    handleCloseDeleteModal,
    handleConfirmDeleteModal,
    isLoadingDelete,
    searchTerm,
    setSearchTerm,
    hasError,
    contacts,
    filteredContacts,
    handleOrderToggle,
    handleDeleteContact,
    handleTryLoadContacts,
    renderList,
  };
}
