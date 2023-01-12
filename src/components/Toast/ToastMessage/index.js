import {
  func, number, oneOf, shape, string,
} from 'prop-types';
import { useEffect } from 'react';
import { Container } from './styles';

import CheckCircle from '../../../assets/images/icons/check-circle.svg';
import XCircle from '../../../assets/images/icons/x-circle.svg';

export default function ToastMessage({
  message, onRemoveToast,
}) {
  const {
    id, text, type, duration,
  } = message;

  useEffect(() => {
    const timeout = setTimeout(() => {
      onRemoveToast(id);
    }, duration || 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [duration, id, onRemoveToast]);

  function handleRemoveToast() {
    onRemoveToast(id);
  }

  return (
    <Container type={type} onClick={handleRemoveToast} tabIndex={0} role="button">
      { type === 'success' && <img src={CheckCircle} alt="Check Circle" /> }
      { type === 'danger' && <img src={XCircle} alt="Check Circle" /> }
      <strong>{ text }</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: shape(() => ({
    id: number.isRequired,
    text: string.isRequired,
    type: oneOf(['default', 'success', 'danger']),
    duration: number.isRequired,
  })).isRequired,
  onRemoveToast: func.isRequired,
};
