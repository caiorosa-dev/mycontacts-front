import { oneOf } from 'prop-types';
import { StyledSpinner } from './styles.js';

export default function Spinner({ size, color }) {
  return <StyledSpinner className="loader" size={size} color={color}><span /></StyledSpinner>;
}

Spinner.propTypes = {
  size: oneOf(['small', 'large']),
  color: oneOf(['white', 'default']),
};

Spinner.defaultProps = {
  size: 'small',
  color: 'default',
};
