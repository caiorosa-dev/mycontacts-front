import PropTypes from 'prop-types';

import { useState } from 'react';
import Card from './Card';
import { CardContainer, Button, ArrowImage } from './styles';
import Arrow from '../../../../../assets/images/icons/arrow.svg';

export default function ContactListContent({
  contacts, onOrderToggle, onDeleteClick, renderList,
}) {
  const [arrowAngle, setArrowAngle] = useState(0);

  function handleOrderToggle() {
    onOrderToggle();

    setArrowAngle((prevState) => (prevState === 180 ? 0 : 180));
  }

  return (
    <div>
      <Button onClick={handleOrderToggle}>
        Nome
        <ArrowImage src={Arrow} alt="Arrow" arrowAngle={arrowAngle} />
      </Button>

      <CardContainer>
        { renderList((contact, { isLeaving, animatedRef }) => (
          <Card
            key={contact.id}
            contact={contact}
            onDeleteClick={onDeleteClick}
            animatedRef={animatedRef}
            isLeaving={isLeaving}
          />
        ), contacts)}
      </CardContainer>
    </div>
  );
}

ContactListContent.propTypes = {
  contacts: PropTypes.arrayOf(() => ({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    categoryName: PropTypes.string,
  })).isRequired,
  onOrderToggle: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  renderList: PropTypes.func.isRequired,
};
