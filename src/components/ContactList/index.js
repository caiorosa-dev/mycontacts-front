import ContactListContent from './Content';
import ContactListHeader from './Header';
import { Container, Division } from './styles';

export default function ContactList() {
  return (
    <Container>
      <ContactListHeader />

      <Division />

      <ContactListContent />
    </Container>
  );
}
