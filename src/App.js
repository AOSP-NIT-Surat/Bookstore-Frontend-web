import React from "react";
import Addbook from "./pages/Addbook";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Addbook} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
