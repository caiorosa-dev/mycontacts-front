import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Container, Division, SearchInputContainer } from './styles';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import ContactListHeader from '../../components/ContactList/Header';
import ContactListContent from '../../components/ContactList/Content';
import WithError from '../../components/ContactList/WithError';
import EmptyContacts from '../../components/ContactList/EmptyContacts';
import EmptySearch from '../../components/ContactList/EmptySearch';
import Modal from '../../components/Modal';
import toast from '../../utils/toast';

export default function Home() {
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

  return (
    <section>
      <Loader isLoading={isLoading} />

      <Modal
        danger
        title={`Tem certeza que deseja remover o contato '${contactBeingDelete?.name}'?`}
        confirmLabel="Deletar"
        visible={isDeleteModalVisible}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleConfirmDeleteModal}
        isLoading={isLoadingDelete}
      >
        <p>Está ação não pode ser desfeita!</p>
      </Modal>

      <SearchInputContainer>
        <input type="text" placeholder="Digite um nome..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </SearchInputContainer>

      <Container>
        { (!hasError && contacts.length !== 0 && filteredContacts.length !== 0) && (
        <>
          <ContactListHeader amount={filteredContacts.length} />

          <Division />

          <ContactListContent
            contacts={filteredContacts}
            onOrderToggle={handleOrderToggle}
            onDeleteClick={handleDeleteContact}
          />
        </>
        ) }
        { hasError && <WithError handleTryLoadContacts={handleTryLoadContacts} /> }
        { (!hasError && !isLoading && contacts.length === 0) && <EmptyContacts /> }
        { (!hasError && !isLoading && filteredContacts.length === 0 && contacts.length !== 0)
        && <EmptySearch searchTerm={searchTerm} /> }
      </Container>
    </section>
  );
}
