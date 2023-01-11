import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchInputContainer = styled.div`
  margin-top: 48px;
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
