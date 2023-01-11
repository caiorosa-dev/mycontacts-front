import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import FormGroup from './FormGroup';
import { Form } from './styles';
import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useErrors from '../../hooks/useErrors';

export default function ContactForm({ buttonText }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const {
    addError, removeError, getErrorMessageByFieldName, isValidToSubmit,
  } = useErrors();

  const isFormValid = (isValidToSubmit() && name);

  function handleNameChange(value) {
    setName(value);

    if (!value) {
      addError({ field: 'name', message: 'O nome é obrigatório.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(value) {
    setEmail(value);

    if (!isEmailValid(value)) {
      addError({ field: 'email', message: 'O e-mail está inválido.' });
      return;
    }

    removeError('email');
  }

  function handlePhoneChange(value) {
    setPhone(formatPhone(value));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input placeholder="Nome *" name="name" error={getErrorMessageByFieldName('name')} value={name} onChange={(event) => handleNameChange(event.target.value)} />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input placeholder="E-Mail" type="email" name="email" error={getErrorMessageByFieldName('email')} value={email} onChange={(event) => handleEmailChange(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" name="phone" value={phone} onChange={(event) => handlePhoneChange(event.target.value)} maxLength="15" />
      </FormGroup>

      <Select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
        <option value="">Categoria</option>
        <option value="instagram">Instagram</option>
        <option value="discord">Discord</option>
      </Select>

      <Button type="submit" disabled={!isFormValid}>{buttonText}</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
