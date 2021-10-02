import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.js";
import SignUp from "./signup.js";

function App() {
  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link id="nav" className="navbar-brand" to={"/login"}>BOOK STORE</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul id="nav1" className="navbar-nav ml-auto">
              <li className="nav-item nav-right">
                <Link id="nav" className="nav-link" to={"/login"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link id="nav" className="nav-link" to={"/signup"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;