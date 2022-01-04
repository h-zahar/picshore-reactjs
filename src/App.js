import * as React from "react";
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";

import AuthProvider from './Contexts/AuthProvider';
import initializeAuthentication from './Firebase/firebase.init';
import Home from "./Components/Pages/Home/Home/Home";
import ContactUs from "./Components/Pages/Home/ContactUs/ContactUs";
import About from "./Components/Pages/Home/About/About";

initializeAuthentication();

function App() {
  return (
    <AuthProvider>
          <Switch>
            <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <ContactUs />
            </Route>
          </Switch>
    </AuthProvider>
  );
}

export default App;
