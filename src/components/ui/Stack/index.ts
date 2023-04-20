import styled from 'styled-components';

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  padding: 0 1em;
  width: 100%;
`;
