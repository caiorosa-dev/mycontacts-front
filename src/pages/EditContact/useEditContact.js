import { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';
import ContactsService from '../../services/ContactsService';
import toast from '../../utils/toast';

export default function useEditContact() {
  const [isLoading, setLoading] = useState(true);
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  const { id } = useParams();
  const history = useHistory();
  const safeAsyncAction = useSafeAsyncAction();

  useEffect(() => {
    const controller = new AbortController();

    async function loadContact(signal) {
      try {
        const contactData = await ContactsService.get(id, signal);

        safeAsyncAction(() => {
          setContactName(contactData.name);

          contactFormRef.current.setFieldsValue(contactData);
          setLoading(false);
        });
      } catch (error) {
        safeAsyncAction(() => {
          toast({ type: 'danger', text: 'Contato não encontrado.' });

          history.push('/');
        });
      }
    }

    loadContact(controller.signal);

    return () => {
      controller.abort();
    };
  });

  async function handleSubmit(contact) {
    try {
      await ContactsService.update(id, contact);

      setContactName(contact.name);

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

  return {
    handleSubmit, isLoading, contactName, contactFormRef,
  };
}
