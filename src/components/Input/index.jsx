import { InputContainer } from "./style";

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input value={value} disabled />
    </InputContainer>
  );
};

export default Input;
