import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import useEditContact from './useEditContact';

export default function EditContact() {
  const {
    handleSubmit, isLoading, contactName, contactFormRef,
  } = useEditContact();

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />

      <ContactForm buttonLabel="Salvar Alterações" onSubmit={handleSubmit} ref={contactFormRef} />
    </>
  );
}
