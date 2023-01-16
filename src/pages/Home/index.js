import { Container, Division, SearchInputContainer } from './styles';
import Loader from '../../components/Loader';
import ContactListHeader from '../../components/ContactList/Header';
import ContactListContent from '../../components/ContactList/Content';
import WithError from '../../components/ContactList/WithError';
import EmptyContacts from '../../components/ContactList/EmptyContacts';
import EmptySearch from '../../components/ContactList/EmptySearch';
import Modal from '../../components/Modal';
import useHome from './useHome';

export default function Home() {
  const {
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
  } = useHome();

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
