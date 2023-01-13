import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';
import Spinner from '../Spinner';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return createPortal(
    <Overlay>
      <Spinner size="large" />
    </Overlay>,
    // eslint-disable-next-line comma-dangle
    document.getElementById('loader-root')
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
