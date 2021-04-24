import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import "./App.css";
import Navbar from "./componets/Navbar";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

function App() {
  return (
    <div className="actualy">
      <Navbar className="NavBar" />
      <h1>Hello</h1>
      <AnimationTest className="AnimationY">
        <h1>Ahoj ko 😍</h1>
      </AnimationTest>
    </div>
  );
}

const AnimationTest = styled.div`
  animation: 2s ${slideInLeftAnimation};
`;

export default App;
