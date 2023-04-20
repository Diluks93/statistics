interface FormState {
  owner: string;
  repo: string;
}

export interface FormProps {
  onSubmit: (data: FormState) => void;
  initialState: FormState;
}
