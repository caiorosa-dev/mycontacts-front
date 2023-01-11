import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;

  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary.main};
  font-weight: bold;
  cursor: pointer;
  background: none;
`;

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
