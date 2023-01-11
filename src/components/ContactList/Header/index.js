import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function ContactListHeader() {
  return (
    <Container>
      <strong>3 contatos</strong>

      <Link to="/new">Novo Contato</Link>
    </Container>
  );
}
