import React from 'react';
import './App.css';
import Home from './views/Home/Home'
import PositionDescription from './views/PositionDescription/PositionDescription'
import './styles/utils.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/position/:positionId">
          <PositionDescription></PositionDescription>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
