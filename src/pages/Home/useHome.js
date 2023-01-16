import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [contactBeingDelete, setContactBeingDelete] = useState({});
  const [isLoadingDelete, setLoadingDelete] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  const loadContacts = useCallback(async () => {
    setLoading(true);

    try {
      const data = await ContactsService.list(orderBy);

      if (!data) {
        setHasError(true);
        return;
      }

      setHasError(false);
      setContacts(data);
    } catch (err) {
      setHasError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleTryLoadContacts() {
    loadContacts();
  }

  function handleDeleteContact(contact) {
    setContactBeingDelete(contact);
    setDeleteModalVisible(true);
  }

  function handleCloseDeleteModal() {
    setDeleteModalVisible(false);
    setContactBeingDelete({});
  }

  async function handleConfirmDeleteModal() {
    setLoadingDelete(true);

    try {
      await ContactsService.delete(contactBeingDelete.id);

      setContacts((prevState) => prevState.filter((obj) => obj.id !== contactBeingDelete.id));

      handleCloseDeleteModal();
      toast({ type: 'success', text: 'O contato deletado com sucesso!' });
    } catch (err) {
      toast({ type: 'danger', text: 'Ocorreu um erro ao deletar o contato!' });
    } finally {
      setLoadingDelete(false);
    }
  }

  function handleOrderToggle() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
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
  };
}
