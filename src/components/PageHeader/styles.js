import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;

    img {
      transform: rotate(-90deg);
      margin-right: 8px;
    }
  }

  strong {
    font-size: 24px;
  }
`;
