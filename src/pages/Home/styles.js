import styled from 'styled-components';

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
