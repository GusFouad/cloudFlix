import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { getUser } from './services/authService';
import NavBar from './components/navBar';
import MyMovieList from './components/MyMovieList';
import LoginForm from './components/loginForm';
import Logout from './components/logoutForm';
import Search from './components/search';
import RegisterForm from './components/registerform';
import Home from './components/CloudFlixHome';
import CloudFlix from './components/CloudFlix';

class App extends Component {
	render() {
		return (
			// <Switch>
			// 	<Route path="/cloudflix" component={CloudFlix} />
			// 	<Route path="/cloudflix/mylist" component={MyMovieList} />
			// 	<Route path="/cloudflix/logout" component={Logout} />
			// 	<Route path="/cloudflix/login" component={LoginForm} />
			// 	<Route path="/cloudflix/register" component={RegisterForm} />
			// 	<Route path="/cloudflix/search" component={Search} />
			// 	<Route path="/" component={Home} />
			// </Switch>
			<div className="App">
				<Route path="/cloudflix" component={CloudFlix} />
				{/* <Route path="/cloudflix/mylist" component={MyMovieList} /> */}
				<Route path="/" component={Home} />
			</div>
			// <React.Fragment>
			// 	{/* // 	<NavBar user={user} /> */}
			// 	<main className="container">
			// 		<Switch>
			// <Route path="/cloudflix" component={CloudFlix} />
			// 			<Route path="/" component={Home} />
			// 		</Switch>
			// 	</main>
			// </React.Fragment>
		);
	}
}

export default App;
