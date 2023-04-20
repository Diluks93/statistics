import { ChangeEvent } from 'react';
import * as Styled from './styled';

interface FormFieldProps {
  name: string;
  value: string;
  handle: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = ({ name, handle, value }: FormFieldProps) => {
  return (
    <Styled.Block>
      <Styled.Label htmlFor={name}>Enter {name} name:</Styled.Label>
      <Styled.Input
        type="text"
        placeholder={`Enter ${name} name`}
        value={value}
        onChange={handle}
        required
        id={name}
      />
    </Styled.Block>
  );
};
