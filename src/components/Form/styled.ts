import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  width: 320px;
  border-radius: 0.25em;
  padding: 0.5em;
  margin: 1.5em auto;
`;

export const Button = styled.button`
  padding: 1em;
  margin: 0.5em;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25em;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.white};
  }
  &:active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background};
  }
`;
