import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { Column, Container, Content, NumKeyboardContent, Row } from "./styles";

function App() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");

  function TransformButton(num) {
    if(num === '/') {
      return <Button label={num} onClick={() => divNumber()} key={num} />;
    } else if(num === '*') {
      return <Button label={num} onClick={() => multNumber()} key={num} />;
    } else if(num === '-') {
      return <Button label={num} onClick={() => subNumber()} key={num} />;
    } else if (num === "+") {
      return <Button label={num} onClick={() => sumNumber()} key={num} />;
    } else if (num === "C") {
      return (
        <Button label={num} onClick={() => handleClearNumber()} key={num} />
      );
    } else if(num === "=") {
      return (
        <Button label={num} onClick={() => handleEquals()} key={num} />
      );
    } else {
      return (
        <Button label={num} onClick={() => handleAddNumber(num)} key={num} />
      );
    }
  }

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const sumNumber = () => {
    if (firstNumber === "") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(sum);
      setOperation('')
    }
  };

  const subNumber = () => {
    if (firstNumber === "") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('-')
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(sub);
      setOperation('')
    }
  };

  const multNumber = () => {
    if (firstNumber === "") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('*')
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(mult);
      setOperation('')
    }
  };

  const divNumber = () => {
    if (firstNumber === "") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('');
      setOperation('/')
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(div);
      setOperation('')
    }
  };

  const handleEquals = () => {
    if(firstNumber !== '' && operation !== '' && currentNumber !== '') {
      switch(operation) {
        case '+':
          sumNumber();
          break;
          case '-':
          subNumber();
          break;
          case '*':
          multNumber();
          break;
          case '/':
          divNumber();
          break;
        default: break;
      }
    }
  }

  const handleClearNumber = () => {
    setCurrentNumber("");
    setFirstNumber("");
    setOperation('')
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <NumKeyboardContent>
          <Row>
            {["1", "2", "3"].map((value) => TransformButton(value))}
            {["4", "5", "6"].map((value) => TransformButton(value))}
            {["7", "8", "9", "0"].map((value) => TransformButton(value))}
          </Row>

          <Column>
            {["C", "+", "-", "*", "/", "="].map((value) =>
              TransformButton(value)
            )}
          </Column>
        </NumKeyboardContent>
      </Content>
    </Container>
  );
}

export default App;
