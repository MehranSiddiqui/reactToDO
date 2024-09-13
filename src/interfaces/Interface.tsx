export interface GlobalSubmitButtonProps {
  text: string;
  onSubmit: () => void;
}
export interface CustomInputProps {
  placeholder: string;
  value: string;
  type: string;
  handleInput: () => void;
  multiline?: boolean;
  rows?: number;
}
