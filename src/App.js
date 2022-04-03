import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="lightgrey" />
    </Father>
  );
}
// function App() {
//   return (
//     <div style={{display: "flex"}}>
//       <div style={{backgroundColor: "teal", width: 100, height: 100}}></div>
//       <div style={{backgroundColor: "tomato", width: 100, height: 100}}></div>
//     </div>
//   );
// }

export default App;
