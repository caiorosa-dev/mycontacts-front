import { useEffect, useMemo, useState } from 'react';
import { SearchInputContainer } from './styles';
import ContactList from '../../components/ContactList';
import Loader from '../../components/Loader';
import ContactsService from '../../services/ContactsService';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  )), [contacts, searchTerm]);

  useEffect(() => {
    async function loadContacts() {
      setLoading(true);

      try {
        const data = ContactsService.listContacts(orderBy);

        setContacts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadContacts();
  }, [orderBy]);

  function onOrderToggle() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <section>
      <Loader isLoading={isLoading} />

      <SearchInputContainer>
        <input type="text" placeholder="Digite um nome..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </SearchInputContainer>

      <ContactList contacts={filteredContacts} onOrderToggle={onOrderToggle} />
    </section>
  );
}
