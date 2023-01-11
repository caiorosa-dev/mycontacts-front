import Card from './Card';
import { CardContainer, Button } from './styles';
import Arrow from '../../../assets/images/icons/arrow.svg';

export default function ContactListContent() {
  return (
    <div>
      <Button>
        Nome
        <img src={Arrow} alt="Arrow" />
      </Button>

      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </div>
  );
}
