import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User from "./Components/User";
import Layout from "./hocs/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user"><User></User></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;