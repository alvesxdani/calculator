import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Column, Container, Content, NumKeyboardContent, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState('')

  function TransformButton(num) {
    return(
        <Button label={num} onClick={() => handleAddNumber(num)} key={num}/>
      )
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)
    if(number === "C") {
      setCurrentNumber('')
    }
  }

  return (
    <Container>
      <Content>

        <Input value={currentNumber}/>

        <NumKeyboardContent>
          <Row>
            {["1", "2", "3"].map((value) => TransformButton(value))}
            {["4", "5", "6"].map((value) => TransformButton(value))}
            {["7", "8", "9", "0"].map((value) => TransformButton(value))}
          </Row>

          <Column>
            {["C","+", "-", "*", "/","="].map((value) => TransformButton(value))}
          </Column>
        </NumKeyboardContent>
      </Content>
    </Container>
  );
}

export default App;
