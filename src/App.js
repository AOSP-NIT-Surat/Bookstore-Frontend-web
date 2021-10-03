import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/login.js";
import SignUp from "./pages/signup.js";

function App() {
  return (
  <Router>
    <div className="App">
    
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
          </div>

    </Router>
  );
}

export default App;