import {
  bool, func, node, string,
} from 'prop-types';
import SmallSpinner from '../SmallSpinner';
import { StyledButton } from './styles';

export default function Button({
  children, isLoading, type, disabled, danger, onClick,
}) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading} danger={danger} onClick={onClick}>
      { !isLoading && children }
      { isLoading && <SmallSpinner /> }
    </StyledButton>
  );
}

Button.propTypes = {
  type: string,
  disabled: bool,
  isLoading: bool,
  danger: bool,
  onClick: func,
  children: node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  danger: false,
  onClick: undefined,
};
