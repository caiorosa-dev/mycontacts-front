import styled from 'styled-components';

export const Header = styled.header`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a {
    padding: 11px 14px;
    background: none;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    border-radius: 4px;
    transition: ${({ theme }) => theme.transition};

    &:hover {
      color: #fff;
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  div {
    h1 {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      margin-bottom: 8px;
    }
  }
`;
