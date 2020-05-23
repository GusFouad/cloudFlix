import React from 'react';
import logo from './logo.jpg';
const Movie = (props) => {
	return (
		<div className="col s12 m6 l3">
			<div className="card">
				<div className="card-image waves-effect waves-block waves-light">
					{props.image == null ? (
						<img
							src={logo}
							alt="card"
							style={{ width: '100%', height: 360 }}
							onClick={() => props.viewMovieInfo(props.movieId)}
						/>
					) : (
						<img
							src={`http://image.tmdb.org/t/p/w185${props.image}`}
							alt="card "
							style={{ width: '100%', height: 360 }}
							onClick={() => props.viewMovieInfo(props.movieId)}
						/>
					)}
					{/* {props.alreadyListed === null ? (
						<i className="material-icons add-circle med" onClick={props.onClickQuickAdd}>
							add_circle
						</i>
					) : (
						<i className="material-icons add-circle med" onClick={props.onClickQuickAdd}>
							check_circle
						</i>
					)} */}
				</div>
				<div className="card-content">
					<p>
						<a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
							View Details
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
