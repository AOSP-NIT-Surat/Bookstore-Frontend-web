

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './hocs/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';

function App() {
	return (
		<div className="App">
			<Router>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/profile" component={Profile} />
					</Switch>
				</Layout>
			</Router>
		</div>
	);

}

export default App;
