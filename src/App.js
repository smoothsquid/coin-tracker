import styled from "styled-components";
import { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(180deg); 
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  } 
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotateAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 72px;
    }
    &:active {
      opacity: 0.5;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>🥰</Emoji>
      </Box>
      <Emoji>👑</Emoji>
    </Wrapper>
  );
}

export default App;
