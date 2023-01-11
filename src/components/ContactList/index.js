import PropTypes from 'prop-types';
import ContactListContent from './Content';
import ContactListHeader from './Header';
import { Container, Division } from './styles';

export default function ContactList({ contacts, onOrderToggle }) {
  return (
    <Container>
      <ContactListHeader amount={contacts.length} />

      <Division />

      { contacts.length > 0 && (
      <ContactListContent contacts={contacts} onOrderToggle={onOrderToggle} />
      ) }
    </Container>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(() => ({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category_name: PropTypes.string,
  })).isRequired,
  onOrderToggle: PropTypes.func.isRequired,
};
