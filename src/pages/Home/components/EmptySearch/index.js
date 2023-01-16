import { string } from 'prop-types';
import { SimpleContainer } from './styles';

import MagnifierQuestion from '../../../../assets/images/icons/magnifier-question.svg';
import { Division } from '../../styles';
import ContactListHeader from '../ContactList/Header';

export default function EmptySearch({ searchTerm }) {
  return (
    <>
      <ContactListHeader amount="0" />

      <Division />

      <SimpleContainer>
        <img src={MagnifierQuestion} alt="Magnifier question" />
        <p>
          Nenhum resultado foi encontrado para
          {' '}
          <strong>
            ”
            {searchTerm}
            ”
          </strong>
          .
        </p>
      </SimpleContainer>
    </>
  );
}

EmptySearch.propTypes = {
  searchTerm: string.isRequired,
};
