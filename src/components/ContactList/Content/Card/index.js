import {
  Container, Header, Information, InnerContainer, Name, Tag, ButtonsContainer,
} from './styles';

import Edit from '../../../../assets/images/icons/edit.svg';
import Delete from '../../../../assets/images/icons/delete.svg';

export default function Card() {
  return (
    <Container>
      <InnerContainer>
        <Header>
          <Name>Mateus Silva</Name>
          <Tag>Instagram</Tag>
        </Header>

        <Information>mateus@devacademy.com.br</Information>
        <Information>(41) 99999-9999</Information>
      </InnerContainer>
      <ButtonsContainer>
        <button type="button"><img src={Edit} alt="Edit" /></button>
        <button type="button"><img src={Delete} alt="Delete" /></button>
      </ButtonsContainer>
    </Container>
  );
}
