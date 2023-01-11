import { useEffect, useState } from 'react';
import { SearchInputContainer } from './styles';
import ContactList from '../../components/ContactList';
import HttpClient from '../../utils/HttpClient';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  useEffect(() => {
    HttpClient.get(`/contacts?orderBy=${orderBy}`).then(({ data }) => {
      setContacts(data);
    });
  }, [orderBy]);

  function onOrderToggle() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  return (
    <section>
      <SearchInputContainer>
        <input type="text" placeholder="Digite um nome..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </SearchInputContainer>

      <ContactList contacts={filteredContacts} onOrderToggle={onOrderToggle} />
    </section>
  );
}
