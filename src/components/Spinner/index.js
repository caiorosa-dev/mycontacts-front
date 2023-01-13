import { oneOf } from 'prop-types';
import { StyledSpinner } from './styles.js';

export default function Spinner({ size }) {
  return <StyledSpinner className="loader" size={size}><span /></StyledSpinner>;
}

Spinner.propTypes = {
  size: oneOf(['small', 'large']),
};

Spinner.defaultProps = {
  size: 'small',
};
