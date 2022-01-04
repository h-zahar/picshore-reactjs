import * as React from "react";
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home/Home";

import AuthProvider from './Contexts/AuthProvider';
import initializeAuthentication from './Firebase/firebase.init';

initializeAuthentication();

function App() {
  return (
    <AuthProvider>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
    </AuthProvider>
  );
}

export default App;
