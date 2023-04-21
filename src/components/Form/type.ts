interface FormState {
  owner: string;
}

export interface FormProps {
  onSubmit: (data: FormState) => void;
  initialState: FormState;
}
