import React from 'react';
import axios from 'axios';
import { getMovies } from './../services/movieService';
const MovieInfo = ({ closeMovieInfo, currentMovie, onClickAdd, isAlreadyListed, alreadyListed, user }) => {
	onClickAdd = async () => {
		const movie = {
			movieId: currentMovie.id
		};
		if (user) {
			return await axios
				.post(process.env.REACT_APP_API_URL + '/movies/add', movie, {
					headers: {
						Authorization: window.localStorage.getItem('token')
					}
				})
				.then((r) => isAlreadyListed(), console.log('Successfully added to your watchlist', user));
		} else {
			window.location = '/login';
		}
	};
	return (
		<div className="container">
			<div className="row back-button" onClick={closeMovieInfo} style={{ cursor: 'pointer', paddingTop: 50 }}>
				<i className="material-icons med">arrow_back</i>
				<p>Back</p>
			</div>
			<div className="row">
				<div className="col s12 m4">
					{currentMovie.poster_path === null ? (
						<img
							className="movie-info-image"
							src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image/jpg'}
							alt="card"
						/>
					) : (
						<img
							className="movie-info-image"
							src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`}
							alt="card"
						/>
					)}
				</div>

				<div className="col s12 m8">
					<div className="info-container">
						<p>{currentMovie.title}</p>
						<p>{currentMovie.release_date}</p>
						<p>{currentMovie.overview}</p>
					</div>
					{alreadyListed === null ? (
						<button onClick={onClickAdd}>Add To Watch List</button>
					) : (
						<h6>This movie is on your list!</h6>
					)}
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
