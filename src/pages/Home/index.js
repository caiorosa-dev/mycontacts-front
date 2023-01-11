import { useEffect, useMemo, useState } from 'react';
import { Container, Division, SearchInputContainer } from './styles';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';
import ContactListHeader from '../../components/ContactList/Header';
import ContactListContent from '../../components/ContactList/Content';
import WithError from '../../components/ContactList/WithError';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  async function loadContacts() {
    setLoading(true);

    try {
      const data = await ContactsService.listContacts(orderBy);

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
  }

  useEffect(() => {
    loadContacts();
  }, [orderBy]);

  function handleTryLoadContacts() {
    loadContacts();
  }

  function onOrderToggle() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <section>
      <Loader isLoading={isLoading} />

      <SearchInputContainer>
        <input type="text" placeholder="Digite um nome..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </SearchInputContainer>

      <Container>
        { !hasError && (
        <>
          <ContactListHeader amount={filteredContacts.length} />

          <Division />

          { filteredContacts.length > 0 && (
          <ContactListContent contacts={filteredContacts} onOrderToggle={onOrderToggle} />
          ) }
        </>
        ) }
        { hasError && <WithError handleTryLoadContacts={handleTryLoadContacts} /> }
      </Container>
    </section>
  );
}
