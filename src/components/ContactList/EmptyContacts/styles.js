import styled from 'styled-components';

export const Header = styled.header`
  margin-top: 32px;
  display: flex;
  justify-content: center;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray.main};
  text-align: center;

  strong {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

export const Icon = styled.img`
  max-width: 110px;
`;
