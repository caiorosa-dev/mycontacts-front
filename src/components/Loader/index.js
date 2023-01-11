import { createPortal } from 'react-dom';
import { Overlay } from './styles';

import './loader.css';

export default function Loader() {
  return createPortal(
    <Overlay>
      <div className="loader-5"><span /></div>
    </Overlay>,
    // eslint-disable-next-line comma-dangle
    document.getElementById('loader-root')
  );
}
