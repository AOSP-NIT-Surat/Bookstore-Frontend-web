import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
