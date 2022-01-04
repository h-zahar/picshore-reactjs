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
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import About from "./Components/Pages/Home/About/About";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";

initializeAuthentication();

function App() {
  return (
    <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            {/* <Route exact path="/home">
              <About />
            </Route> */}
            <Route exact path="/contact">
              <ContactUs />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
    </AuthProvider>
  );
}

export default App;
