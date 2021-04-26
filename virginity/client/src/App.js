import "./App.css";
import styled, { keyframes } from "styled-components";
import { slideInLeft } from "react-animations";
import Navbar from "./componets/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./componets/Login";

const slideInLeftAnimation = keyframes`${slideInLeft}`;

function App() {
  return (
    <div className="actualy">
        <Router>
          <Switch>
            <Route exact path="/"> 
              <Navbar />
              <h1>Hello</h1>
              <AnimationTest className="AnimationY">
                <h1>Ahoj koo 😍</h1>
              </AnimationTest>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>  
        </Router>
    </div>
  );
}

const AnimationTest = styled.div`
  animation: 2s ${slideInLeftAnimation};
`;

export default App;
