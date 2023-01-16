import { func, string } from 'prop-types';
import { Container } from './styles';

export default function SearchInput({ value, onSearchTermChange }) {
  return (
    <Container>
      <input type="text" placeholder="Digite um nome..." value={value} onChange={(event) => onSearchTermChange(event.target.value)} />
    </Container>
  );
}

SearchInput.propTypes = {
  value: string.isRequired,
  onSearchTermChange: func.isRequired,
};
