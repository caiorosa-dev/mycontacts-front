import { Link } from 'react-router-dom';
import {
  Container, Header, Icon, Text,
} from './styles';

import EmptyBox from '../../../assets/images/icons/empty-box.svg';
import { Division } from '../../../pages/Home/styles';

export default function EmptyContacts() {
  return (
    <>
      <Header>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <Division />

      <Container>
        <Icon src={EmptyBox} alt="Empty Box Icon" />

        <Text>
          Você ainda não tem nenhum contato cadastrado!
          {' '}
          <br />
          Clique no botão
          {' '}
          <strong>”Novo contato”</strong>
          {' '}
          à cima para cadastrar o seu primeiro!

        </Text>
      </Container>
    </>
  );
}
