import { useCallback, useEffect, useState } from 'react';
import { ToastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setMessages((prev) => [...prev, {
        id: Math.random(), type, text, duration,
      }]);
    }

    ToastEventManager.on('addtoast', handleAddToast);

    return () => {
      ToastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter((message) => message.id !== id));
  }, []);

  return (
    <Container>
      { messages
        .map((object) => (
          <ToastMessage
            key={object.id}
            message={object}
            onRemoveToast={handleRemoveMessage}
          />
        )) }
    </Container>
  );
}
