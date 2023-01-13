import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function NewContact() {
  async function handleSubmit({
    name, email, phone, categoryId,
  }) {
    const contact = {
      name, email, phone, category_id: categoryId,
    };

    try {
      await ContactsService.create(contact);

      toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao realizar o cadastro!',
      });
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />

      <ContactForm buttonText="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
