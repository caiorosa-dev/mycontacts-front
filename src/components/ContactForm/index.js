import PropTypes from 'prop-types';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import { Container } from './styles';

export default function ContactForm({ buttonText }) {
  return (
    <Container>
      <Input placeholder="Nome" />
      <Input placeholder="E-Mail" />
      <Input placeholder="Telefone" />
      <Select>
        <option>Categoria</option>
      </Select>

      <Button type="submit">{ buttonText }</Button>
    </Container>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
