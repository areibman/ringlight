import "./App.css";
import styled from "styled-components";
import Webcam from "react-webcam";
import Draggable from "react-draggable";
import Switch from "react-switch";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const RingOutter = styled.span`
  height: 100vh;
  width: 100vw;
  background-color: white;
  /* border-radius: 50%; */
  position: absolute;
  z-index: 0;
`;

const RingInner = styled.span`
  height: 80vh;
  width: 80vh;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
`;

const WebcamBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  position: absolute;
  z-index: 3;
`;

const LightSwitch = styled(Switch)`
  position: absolute;
  z-index: 3;
`;

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <Draggable>
            <WebcamBox>I can now be moved around!</WebcamBox>
          </Draggable>
          <RingOutter />
          <RingInner />
        </header>
      </div>
    </Container>
  );
}

export default App;
