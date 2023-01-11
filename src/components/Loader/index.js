import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay } from './styles';

import './loader.css';

export default function Loader({ isLoading }) {
  if (!isLoading) return null;

  return createPortal(
    <Overlay>
      <div className="loader-5"><span /></div>
    </Overlay>,
    // eslint-disable-next-line comma-dangle
    document.getElementById('loader-root')
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
