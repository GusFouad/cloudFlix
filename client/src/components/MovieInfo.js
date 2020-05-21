import React from 'react';
import axios from 'axios';
import { getUser } from '../services/authService';
const MovieInfo = ({ closeMovieInfo, currentMovie, onClickAdd, user, alreadyListed }) => {
	alreadyListed = (user) => {
		let listed = '';
		const movies = user.movies;
		for (let i = 0; i < movies.length; i++) {
			if (movies[i].movieId === currentMovie.id) {
				listed = 'LISTED';
			} else {
				listed = null;
			}
		}
		return listed;
	};
	onClickAdd = async () => {
		const movie = {
			movieId: currentMovie.id
		};

		await axios
			.post(process.env.REACT_APP_API_URL + '/movies/add', movie, {
				headers: {
					Authorization: window.localStorage.getItem('token')
				}
			})
			.then((r) => console.log(r, 'Successfully added to your watchlist', 'THIS IS USER'));
	};
	const listed = alreadyListed(user);
	console.log(listed);

	return (
		<div className="container">
			<div className="row" onClick={closeMovieInfo} style={{ cursor: 'pointer', paddingTop: 50 }}>
				<h5>
					<i className="material-icons">arrow_back</i>Back
				</h5>
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
					{listed === null ? (
						<button onClick={onClickAdd}>Add To Watch List</button>
					) : (
						<p>Movie already on your watchlist</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default MovieInfo;
