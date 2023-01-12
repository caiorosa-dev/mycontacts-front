import { bool, node, string } from 'prop-types';
import SmallSpinner from '../SmallSpinner';
import { StyledButton } from './styles';

export default function Button({
  children, isLoading, type, disabled,
}) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading}>
      { !isLoading && children }
      { isLoading && <SmallSpinner /> }
    </StyledButton>
  );
}

Button.propTypes = {
  type: string,
  disabled: bool,
  isLoading: bool,
  children: node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
};
