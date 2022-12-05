import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Column, Container, Content, NumKeyboardContent, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState('')
  const [firstNumber, setFirstNumber] = useState('')

  function TransformButton(num) {
    if(num === "+") {
      return(
        <Button label={num} onClick={() => sumNumber()} key={num}/>
      )
    } else {
      return(
        <Button label={num} onClick={() => handleAddNumber(num)} key={num}/>
      )
    }
  }

  const sumNumber = () => {
    if(firstNumber === '') {
      setFirstNumber(String(currentNumber))
      setCurrentNumber('')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(sum)
    }
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev}${number}`)

    if(number === "C") {
      setCurrentNumber('')
      setFirstNumber('')
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
