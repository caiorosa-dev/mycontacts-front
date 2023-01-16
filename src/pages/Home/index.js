import { Container, Division } from './styles';
import Loader from '../../components/Loader';
import ContactListHeader from './components/ContactList/Header';
import ContactListContent from './components/ContactList/Content';
import ErrorStatus from './components/ErrorStatus';
import EmptyContacts from './components/EmptyContacts';
import EmptySearch from './components/EmptySearch';
import Modal from '../../components/Modal';
import useHome from './useHome';
import SearchInput from './components/SearchInput';

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

  const hasContacts = contacts.length > 0;
  const hasFilteredContacts = filteredContacts.length > 0;
  const isListEmpty = !hasError && !isLoading && !hasContacts;
  const isSearchResultsEmpty = !hasError && !isLoading && !hasFilteredContacts && hasContacts;

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

      <SearchInput onSearchTermChange={setSearchTerm} value={searchTerm} />

      <Container>
        { (!hasError && hasContacts && hasFilteredContacts) && (
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

        { hasError && <ErrorStatus handleTryLoadContacts={handleTryLoadContacts} /> }
        { (isListEmpty) && <EmptyContacts /> }
        { (isSearchResultsEmpty) && <EmptySearch searchTerm={searchTerm} /> }
      </Container>
    </section>
  );
}
