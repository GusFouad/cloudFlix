import React, { Component } from 'react';
import { getUser } from '../services/authService';
import config from '../config.json';
import { getMovies } from '../services/movieService';
import MoviesTable from './MoviesTable';
import MovieInfo from './MovieInfo';
import MovieList from './MovieList';
import axios from 'axios';
class MyMovieList extends Component {
	state = {
		movies: [],
		currentMovie: null
	};

	async componentDidMount() {
		let movieData = [];
		const { data } = await getMovies();
		const movies = await Promise.all(
			data.map((id) => {
				const promise = axios(config.movieIdApi + id.movieId + config.apiKey).then(({ data }) => {
					movieData.push(data);
					this.setState({ movies: movieData });
				});
				return promise;
			})
		);
	}
	viewMovieInfo = async (id) => {
		const filteredMovie = this.state.movies.filter((movie) => movie.id === id);
		const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
		this.setState({ currentMovie: newCurrentMovie });
		this.isAlreadyListed();
	};
	closeMovieInfo = () => {
		this.setState({ currentMovie: null });
	};
	isAlreadyListed = async (searchReturn) => {
		const { data } = await getMovies();
		let listed = null;
		for (let i = 0; i < data.length; i++) {
			if (data[i].movieId === this.state.currentMovie.id) {
				listed = 'Listed';
			}
		}
		console.log(this.state.alreadyListed);
		this.setState({ alreadyListed: listed });
	};
	handleDelete = async (movie) => {
		await axios.delete(process.env.REACT_APP_API_URL + '/movies/' + movie.id, {
			headers: {
				Authorization: window.localStorage.getItem('token')
			}
		});

		const originalMovies = this.state.movies;
		const movies = originalMovies.filter((m) => m.id !== movie.id);
		this.setState({ movies });
	};
	render() {
		const { length: count } = this.state.movies;
		const { movies } = this.state;
		const user = getUser();

		if (count === 0) return <p>There are no movies on your watchlist </p>;
		return (
			<React.Fragment>
				<p>You have {count} movies on your watchlist</p>
				{this.state.currentMovie === null ? (
					<div>
						<MoviesTable movies={movies} onDelete={this.handleDelete} poster={movies.poster} />
						<div className="my-movie-list">
							<MovieList
								onClickQuickAdd={this.onClickQuickAdd}
								viewMovieInfo={this.viewMovieInfo}
								movies={this.state.movies}
								alreadyListed={this.state.alreadyListed}
							/>
						</div>
					</div>
				) : (
					<MovieInfo
						user={user}
						isAlreadyListed={this.isAlreadyListed}
						alreadyListed={this.state.alreadyListed}
						currentMovie={this.state.currentMovie}
						closeMovieInfo={this.closeMovieInfo}
						handleDelete={this.handleDelete}
					/>
				)}
			</React.Fragment>
		);
	}
}

export default MyMovieList;
