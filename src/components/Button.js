import styled from 'styled-components';

export default styled.button`
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: bold;

  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  border-radius: 4px;

  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow};

  :hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  :active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  :disabled {
    background-color: #CCCCCC;
    cursor: default;
  }
`;
