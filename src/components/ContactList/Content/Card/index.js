import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container, Header, Information, InnerContainer, Name, Tag, ButtonsContainer,
} from './styles';

import Edit from '../../../../assets/images/icons/edit.svg';
import Delete from '../../../../assets/images/icons/delete.svg';

import formatPhone from '../../../../utils/formatPhone';

export default function Card({ contact }) {
  const {
    id, name, email, phone, category_name,
  } = contact;

  return (
    <Container>
      <InnerContainer>
        <Header>
          <Name>{ name }</Name>
          { category_name && <Tag>{ category_name }</Tag> }
        </Header>

        { email && <Information>{ email }</Information> }
        { phone && <Information>{ formatPhone(phone) }</Information> }
      </InnerContainer>
      <ButtonsContainer>
        <Link to={`/edit/${id}`}><img src={Edit} alt="Edit" /></Link>
        <button type="button"><img src={Delete} alt="Delete" /></button>
      </ButtonsContainer>
    </Container>
  );
}

Card.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category_name: PropTypes.string,
  }).isRequired,
};
