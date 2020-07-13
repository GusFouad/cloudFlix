import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getUser } from './services/authService';
import NavBar from './components/navBar';
import MyMovieList from './components/MyMovieList';
import LoginForm from './components/loginForm';
import Logout from './components/logoutForm';
import Search from './components/search';
import RegisterForm from './components/registerform';
import CloudFlixHome from './components/CloudFlixHome';
import CloudFlix from './components/CloudFlix';
import Home from './components/Home';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<main className="port-home">
					<Switch>
						<Route path="/cloudflix" component={CloudFlix} />
						<Route path="/cloudflix/home" component={CloudFlixHome} />

						<Route path="/" component={Home} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
