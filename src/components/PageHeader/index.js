import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Arrow from '../../assets/images/icons/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="/">
        <img src={Arrow} alt="Arrow" />

        <span>Voltar</span>
      </Link>

      <strong>{ title }</strong>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
