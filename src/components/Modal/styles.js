import styled from 'styled-components';

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
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;

  border-radius: 4px;
  padding: 24px;

  background: #fff;
  box-shadow: ${({ theme }) => theme.shadow};

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => danger && theme.colors.danger.main};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: none;
    margin-right: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray.main};
  }
`;
