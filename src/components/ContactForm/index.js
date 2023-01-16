import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import FormGroup from './FormGroup';
import { Form } from './styles';
import useContactForm from './useContactForm';

const ContactForm = forwardRef(({ buttonLabel, onSubmit }, ref) => {
  const {
    handleSubmit,
    getErrorMessageByFieldName,
    isSubmitting,
    name,
    handleNameChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    isLoadingCategories,
    categoryId,
    setCategoryId,
    categories,
    isFormValid,
  } = useContactForm(onSubmit, ref);

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input placeholder="Nome *" name="name" error={getErrorMessageByFieldName('name')} disabled={isSubmitting} value={name} onChange={(event) => handleNameChange(event.target.value)} />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input placeholder="E-Mail" type="email" name="email" error={getErrorMessageByFieldName('email')} disabled={isSubmitting} value={email} onChange={(event) => handleEmailChange(event.target.value)} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" name="phone" value={phone} disabled={isSubmitting} onChange={(event) => handlePhoneChange(event.target.value)} maxLength="15" />
      </FormGroup>

      <FormGroup isLoading={isLoadingCategories}>
        <Select name="categoryId" value={categoryId} disabled={isLoadingCategories || isSubmitting} onChange={(event) => setCategoryId(event.target.value)}>
          <option value="">Sem Categoria</option>
          { categories
            .map(
              (object) => (<option key={object.id} value={object.id}>{object.name}</option>),
            ) }
        </Select>
      </FormGroup>

      <Button type="submit" disabled={!isFormValid} isLoading={isSubmitting}>
        { buttonLabel }
      </Button>
    </Form>
  );
});

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
