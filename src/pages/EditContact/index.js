import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function EditContact() {
  const [isLoading, setLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.get(id);

        setContactName(contactData.name);

        contactFormRef.current.setFieldsValue(contactData);

        setLoading(false);
      } catch (error) {
        toast({ type: 'danger', text: 'Contato não encontrado.' });

        history.push('/');
      }
    }

    loadContact();
  });

  async function handleSubmit({
    name, email, phone, categoryId,
  }) {
    console.log(categoryId);

    const contact = {
      id, name, email, phone, category_id: categoryId,
    };

    try {
      await ContactsService.update(contact);

      setContactName(name);

      toast({
        type: 'success',
        text: 'Contato atualizado com sucesso!',
      });
    } catch (error) {
      toast({
        type: 'danger',
        text: 'Ocorreu um erro ao atualizar o cadastro!',
      });
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <PageHeader title={isLoading ? 'Carregando...' : `Editar ${contactName}`} />

      <ContactForm buttonText="Salvar Alterações" onSubmit={handleSubmit} ref={contactFormRef} />
    </>
  );
}
