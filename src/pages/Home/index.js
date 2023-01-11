import { SearchInputContainer } from './styles';
import ContactList from '../../components/ContactList';

export default function Home() {
  return (
    <section>
      <SearchInputContainer>
        <input type="text" placeholder="Digite um nome..." />
      </SearchInputContainer>

      <ContactList />
    </section>
  );
}
