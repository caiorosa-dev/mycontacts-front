import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fadeIn} 0.3s ease-in;

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} 0.3s ease-out forwards;`}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;

  border-radius: 4px;
  padding: 24px;

  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow};

  animation: ${scaleIn} 0.3s ease-in;
  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} 0.3s ease-out forwards;`}

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => danger && theme.colors.danger.main};
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: none;
    margin-right: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray.main};

    :disabled {
      cursor: not-allowed;
    }
  }
`;
