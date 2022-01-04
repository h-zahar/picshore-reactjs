import * as React from "react";
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";

import AuthProvider from './Contexts/AuthProvider';
import initializeAuthentication from './Firebase/firebase.init';
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";

initializeAuthentication();

function App() {
  return (
    <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
    </AuthProvider>
  );
}

export default App;
