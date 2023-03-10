import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 24px;
  }

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
