import styled, { css, keyframes } from 'styled-components';

const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(50px);
  }
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  min-height: 96px;
  box-shadow: ${({ theme }) => theme.shadow};

  animation: ${cardIn} 0.3s ease-out;

  ${({ isLeaving }) => isLeaving && css`animation: ${cardOut} 0.3s ease-in;`}
`;

export const Name = styled.strong`
  font-size: 16px;
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

export const Information = styled.small`
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

  button, a {
    background: none;
  }
`;
