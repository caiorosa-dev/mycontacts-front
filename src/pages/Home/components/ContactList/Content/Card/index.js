import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container, Header, Information, InnerContainer, Name, Tag, ButtonsContainer,
} from './styles';

import Edit from '../../../../../../assets/images/icons/edit.svg';
import Delete from '../../../../../../assets/images/icons/delete.svg';

import formatPhone from '../../../../../../utils/formatPhone';

export default function Card({
  contact, onDeleteClick, isLeaving, animatedRef,
}) {
  const {
    id, name, email, phone, categoryName,
  } = contact;

  function handleDeleteClick() {
    onDeleteClick(contact);
  }

  return (
    <Container ref={animatedRef} isLeaving={isLeaving}>
      <InnerContainer>
        <Header>
          <Name>{ name }</Name>
          { categoryName && <Tag>{ categoryName }</Tag> }
        </Header>

        { email && <Information>{ email }</Information> }
        { phone && <Information>{ formatPhone(phone) }</Information> }
      </InnerContainer>
      <ButtonsContainer>
        <Link to={`/edit/${id}`}><img src={Edit} alt="Edit" /></Link>
        <button type="button" onClick={handleDeleteClick}><img src={Delete} alt="Delete" /></button>
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
    categoryName: PropTypes.string,
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};
