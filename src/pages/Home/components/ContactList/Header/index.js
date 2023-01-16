import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ContactListHeader({ amount }) {
  return (
    <Container>
      <strong>
        {amount}
        {' '}
        {amount > 1 ? 'contatos' : 'contato' }
      </strong>

      <Link to="/new">Novo Contato</Link>
    </Container>
  );
}

ContactListHeader.propTypes = {
  amount: PropTypes.number.isRequired,
};
