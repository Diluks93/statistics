import { FormField } from 'components/FormField';
import { ChangeEvent, FormEventHandler, useState } from 'react';
import * as Styled from './styled';
import { FormProps } from './type';

export const Form = ({ onSubmit, initialState }: FormProps) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event,
  ) => {
    event.preventDefault();

    onSubmit(form);
    setForm({
      owner: '',
    });
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <FormField name="owner" value={form.owner} handle={handleChange} />
      <Styled.Button type="submit">Submit</Styled.Button>
    </Styled.Form>
  );
};
