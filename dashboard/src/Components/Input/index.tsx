import { InputContainer, StyledInput } from "./styles";
import { IInput } from "./types";

function Input({ title, type }: IInput) {
  return (
    <InputContainer>
      <label htmlFor={title}>{title}</label>
      <StyledInput type={type} />
    </InputContainer>
  );
}

export default Input;
