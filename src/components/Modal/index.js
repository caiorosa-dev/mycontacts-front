import PropTypes from 'prop-types';
import Button from '../Button';
import ReactPortal from '../ReactPortal';
import { Container, Footer, Overlay } from './styles';

export default function Modal({
  danger, title, children, cancelLabel, confirmLabel, onCancel, onConfirm, visible, isLoading,
}) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container danger={danger}>
          <h1>{title}</h1>

          <div className="modal-body">
            {children}
          </div>

          <Footer>
            <button type="button" className="cancel-button" disabled={isLoading} onClick={onCancel}>{cancelLabel}</button>
            <Button type="button" danger={danger} onClick={onConfirm} isLoading={isLoading}>{confirmLabel}</Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  visible: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Modal.defaultProps = {
  cancelLabel: 'Cancelar',
  confirmLabel: 'Confirmar',
  danger: false,
  visible: false,
  isLoading: false,
};
