import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border-radius: 25px;
    height: 50px;
    box-shadow: ${({ theme }) => theme.shadow};;
    padding: 0 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray.main};
    }
  }
`;
