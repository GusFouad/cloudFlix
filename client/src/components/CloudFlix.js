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
				<NavBar user={user} />
				<main className="container">
					{/* <h1>CloudFlix</h1>
					<h2>Welcome to cloud flix</h2>
					<h3>Go ahead and search your fav movies and add them to your list!</h3>
					<p>
						First time? <a href="/register">Register Here!</a>
					</p>
					<p>
						Already have an account? <a href="/login">Login Here!</a>
					</p>
					<div>
						{this.state.movies.map((movie, i) => {
							console.log('FIGURING MOVIE OUT ', movie);
							return <img src={`http://image.tmdb.org/t/p/w185${movie[0].poster_path}`} />;
						})} */}
					{/* </div> */}
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
