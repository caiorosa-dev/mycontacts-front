import styled, { css } from 'styled-components';

const containerVariants = {
  default: css`
    background: ${({ theme }) => theme.colors.primary.main};
  `,
  danger: css`
    background: ${({ theme }) => theme.colors.danger.main};
  `,
  success: css`
    background: ${({ theme }) => theme.colors.success.main};
  `,
};

export const Container = styled.div`
  & + & {
    margin-top: 12px;
  }

  padding: 16px 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  text-align: center;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);

  ${({ type }) => containerVariants[type] || containerVariants.default}
`;
