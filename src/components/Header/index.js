import { Container, SearchInputContainer } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="200px" />

      <SearchInputContainer>
        <input type="text" placeholder="Digite um nome..." />
      </SearchInputContainer>
    </Container>
  );
}
