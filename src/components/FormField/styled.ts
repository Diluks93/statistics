import styled from 'styled-components';

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0.5em;
`;

export const Label = styled.label`
  letter-spacing: 0.25px;
  margin-bottom: 0.35em;
`;

export const Input = styled.input`
  padding: 1.35em 1em;
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25em;
  width: 100%;
`;
