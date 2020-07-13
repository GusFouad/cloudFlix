import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CloudFlix from './components/CloudFlix';
import NavBar from './components/navBar';
import Home from './components/CloudFlixHome';

class App extends Component {
	state = {};

	render() {
		return (
			<React.Fragment>
				<div>
					<h1>
						<a href="http://localhost:3001/cloudflix">MY PORT</a>
					</h1>
				</div>
				<main className="container">
					<Switch>
						<Route path="/cloudflix" component={CloudFlix} />
						{/* <Route path="/logout" component={Logout} />
						<Route path="/login" component={LoginForm} />
						<Route path="/register" component={RegisterForm} /> */}
						{/* <Route path="/" component={Home} /> */}
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
