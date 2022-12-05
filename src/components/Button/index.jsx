import { ButtonContainer } from "./style";

const Button = ({label, onClick}) => {
  if(label === "0"){
    return(
      <ButtonContainer onClick={onClick} style={{gridColumn: 'span 3'}} type="button">{label}</ButtonContainer>
    )
  } else {
    return(
      <ButtonContainer onClick={onClick}>{label}</ButtonContainer>
    )
  }
}

export default Button;