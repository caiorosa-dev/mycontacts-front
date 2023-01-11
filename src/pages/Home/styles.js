import styled from 'styled-components';

export const SearchInputContainer = styled.div`
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

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Division = styled.hr`
  height: 2px;
  background: ${({ theme }) => theme.colors.gray.main};
`;
