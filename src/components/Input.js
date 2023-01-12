import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  padding: 14px;
  font-size: 16px;
  border: 2px solid #fff;
  background: #fff;
  border-radius: 4px;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadow};
  appearance: none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray.main};
  }

  :focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  :disabled {
    background-color: ${({ theme }) => theme.colors.gray.light};
    border-color: ${({ theme }) => theme.colors.gray.main};
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main} !important;
    color: ${theme.colors.danger.main};
    opacity: 1;
  `}
`;
