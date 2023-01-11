import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Name = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray.dark};
  font-weight: bold;
`;

export const Tag = styled.span`
  padding: 3px 6px;
  font-size: 12px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary.lighter};
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  text-transform: uppercase;
`;

export const Information = styled.span`
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray.main};
`;

export const Header = styled.div`
  display: flex;
  gap: 8px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  button {
    background: none;
  }
`;
