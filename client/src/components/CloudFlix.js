import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { getUser } from '../services/authService';
import NavBar from '../components/navBar';
import MyMovieList from '../components/MyMovieList';
import LoginForm from '../components/loginForm';
import Logout from '../components/logoutForm';
import Search from '../components/search';
import RegisterForm from '../components/registerform';
import CloudFlixHome from './CloudFlixHome';
import { Helmet } from 'react-helmet';
class CloudFlix extends Component {
	state = { movies: [], user: {} };
	async componentDidMount() {
		const user = getUser();
		this.setState({ user });
		let movieData = [];
		await axios(
			'https://api.themoviedb.org/3/movie/now_playing?api_key=ed1b18e9826bd1190664c17b9c51cd83'
		).then(({ data }) => {
			movieData.push(data.results);
			this.setState({ movies: [ ...movieData ] });
			console.log(data, data.results[0].poster_path, this.state.movies.poster, 'THIS IS DATA');
		});
	}
	render() {
		const { user } = this.state;
		return (
			<React.Fragment>
				<Helmet>
					<title>CloudFlix</title>
				</Helmet>
				<NavBar user={user} />
				<main className="container">
					<Switch>
						<Route path="/cloudflix/mylist" component={MyMovieList} />
						<Route path="/cloudflix/logout" component={Logout} />
						<Route path="/cloudflix/login" component={LoginForm} />
						<Route path="/cloudflix/register" component={RegisterForm} />
						<Route path="/cloudflix/search" component={Search} />
						<Route path="/cloudflix/home" component={CloudFlixHome} />
					</Switch>
				</main>
			</React.Fragment>
		);
	}
}

export default CloudFlix;
