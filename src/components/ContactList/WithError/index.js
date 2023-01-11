import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import { ErrorContainer, Header } from './styles';

import Sad from '../../../assets/images/icons/sad.svg';
import Button from '../../Button';
import { Division } from '../../../pages/Home/styles';

export default function WithError({ handleTryLoadContacts }) {
  return (
    <>
      <Header>
        <Link to="/new">Novo Contato</Link>
      </Header>

      <Division />

      <ErrorContainer>
        <img src={Sad} alt="Sad face" />
        <div>
          <h1>Ocorreu um erro ao obter os seus contatos!</h1>
          <Button onClick={handleTryLoadContacts}>Tentar Novamente</Button>
        </div>
      </ErrorContainer>
    </>
  );
}

WithError.propTypes = {
  handleTryLoadContacts: func.isRequired,
};
