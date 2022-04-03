import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
  padding: 10px 20px;
`;

const Input = styled.input.attrs({ type: "search", required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Btn>Logging</Btn>
      <Btn as="a" href="/">
        Logging
      </Btn>
    </Father>
  );
}

export default App;
