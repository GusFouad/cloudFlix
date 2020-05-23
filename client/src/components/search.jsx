import React, { Component } from 'react';
import axios from 'axios';
import config from '../config.json';
import { getUser } from '../services/authService';
import { getMovies } from './../services/movieService';
import MovieList from './MovieList';
import MovieInfo from './MovieInfo';
import Pagination from './Pagination';

class Search extends Component {
	state = {
		movies: [],
		search: '',
		totalResults: 0,
		currentPage: 1,
		currentMovie: null,
		alreadyListed: null
	};
	handleChange = (e) => {
		this.setState({ search: e.target.value });
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		await axios(process.env.REACT_APP_MOVIE_API + this.state.search).then(({ data }) => {
			let movies = data.results;
			const movieIds = [];
			for (let i = 0; i < movies.length; i++) {
				movieIds.push(movies[i].id);
			}
			// console.log(movieIds);
			const user = getUser();

			this.setState({
				movies: [ ...movies ],
				totalResults: data.total_results
			});

			// this.isAlreadyListed(movieIds);
		});
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
	handlePageChange = (page) => {
		console.log(page);
	};
	nextPage = (pageNumber) => {
		axios(`${config.movieApi}${this.state.search}&page=${pageNumber}`).then(({ data }) => {
			this.setState({ movies: [ ...data.results ], currentPage: pageNumber });
		});
	};
	viewMovieInfo = async (id) => {
		const filteredMovie = this.state.movies.filter((movie) => movie.id === id);
		const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
		this.setState({ currentMovie: newCurrentMovie });
		this.isAlreadyListed();
	};

	// onClickQuickAdd = async () => {
	// 	const movie = {
	// 		movieId: this.state.currentMovie.id
	// 	};
	// 	await axios
	// 		.post(process.env.REACT_APP_API_URL + '/movies/add', movie, {
	// 			headers: {
	// 				Authorization: window.localStorage.getItem('token')
	// 			}
	// 		})
	// 		.then((r) => console.log('Successfully added to your watchlist'));
	// 	this.isAlreadyListed();
	// };
	closeMovieInfo = () => {
		this.setState({ currentMovie: null });
	};
	handleDelete = async (movie) => {
		await axios.delete(process.env.REACT_APP_API_URL + '/movies/' + movie.id, {
			headers: {
				Authorization: window.localStorage.getItem('token')
			}
		});
		this.isAlreadyListed();
	};
	render() {
		const numberPages = Math.floor(this.state.totalResults / 21);
		const user = getUser();
		return (
			<div>
				{this.state.currentMovie === null ? (
					<div>
						<div className="container">
							<div>
								<div className="row">
									<section>
										<form onSubmit={this.handleSubmit}>
											<div className="search-box">
												<div>
													<i className="material-icons">search</i>
												</div>
												<div className="search-input">
													<input
														type="text"
														placeholder="Search movies"
														onChange={this.handleChange}
														results="0"
													/>
												</div>
											</div>
										</form>
									</section>
								</div>
							</div>
						</div>
						<MovieList
							onClickQuickAdd={this.onClickQuickAdd}
							viewMovieInfo={this.viewMovieInfo}
							movies={this.state.movies}
							alreadyListed={this.state.alreadyListed}
						/>
					</div>
				) : (
					<div>
						<div className="container">
							<div>
								<div className="row">
									<section>
										<form onSubmit={this.handleSubmit}>
											<div className="search-box">
												<div>
													<i className="material-icons">search</i>
												</div>
												<input
													type="text"
													placeholder="Search movies"
													onChange={this.handleChange}
												/>
											</div>
										</form>
									</section>
								</div>
							</div>
						</div>
						<MovieInfo
							user={user}
							isAlreadyListed={this.isAlreadyListed}
							alreadyListed={this.state.alreadyListed}
							currentMovie={this.state.currentMovie}
							closeMovieInfo={this.closeMovieInfo}
							handleDelete={this.handleDelete}
						/>
					</div>
				)}
				{this.state.totalResults > 20 && this.state.currentMovie === null ? (
					<Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} />
				) : (
					''
				)}
			</div>
		);
	}
}
export default Search;
