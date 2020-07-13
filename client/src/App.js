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
	state = {};

	componentDidMount() {
		const user = getUser();
		this.setState({ user });
	}
	render() {
		const { user } = this.state;
		return (
			<React.Fragment>
				{/* <NavBar user={user} /> */}
				<main className="port-home">
					<Switch>
						<Route path="/cloudflix/home" component={CloudFlixHome} />
						{/* <Route path="/cloudflix/mylist" component={MyMovieList} />
						<Route path="/cloudflix/logout" component={Logout} />
						<Route path="/cloudflix/login" component={LoginForm} />
						<Route path="/cloudflix/register" component={RegisterForm} />
						<Route path="/cloudflix/search" component={Search} /> */}
						{/* <Route path="/cloudflix/home" component={CloudFlixHome} /> */}
						{/* <Route path="/juno" component={Juno} /> */}
						<Route path="/" component={Home} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
