import { useEffect } from 'react';
import useAnimatedList from '../../../hooks/useAnimatedList';
import { ToastEventManager } from '../../../utils/toast';
import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  const {
    setItems,
    renderList,
    handleRemoveItem,
  } = useAnimatedList();

  useEffect(() => {
    function handleAddToast({ type, text, duration }) {
      setItems((prev) => [...prev, {
        id: Math.random(), type, text, duration,
      }]);
    }

    ToastEventManager.on('addtoast', handleAddToast);

    return () => {
      ToastEventManager.removeListener('addtoast', handleAddToast);
    };
  }, [setItems]);

  return (
    <Container>
      { renderList((message, { isLeaving, animatedRef }) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveItem}
          isLeaving={isLeaving}
          animatedRef={animatedRef}
        />
      )) }
    </Container>
  );
}
