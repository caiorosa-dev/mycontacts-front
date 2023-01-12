import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  const history = useHistory();

  async function handleSubmit({
    name, email, phone, categoryId,
  }) {
    const contact = {
      name, email, phone, category_id: categoryId,
    };

    try {
      await ContactsService.create(contact);

      history.push('/');
    } catch (error) {
      alert('Ocorreu um erro!');
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonText="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
