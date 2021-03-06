import React from 'react';
import Movie from './Movie';
const MovieList = (props) => {
	return (
		<div className="movie-card">
			<div className="row">
				<div className="col-sm">
					{props.movies.map((movie, i) => {
						return (
							<Movie
								key={i}
								image={movie.poster_path}
								viewMovieInfo={props.viewMovieInfo}
								movieId={movie.id}
								movieTitle={movie.original_title}
								onClickQuickAdd={props.onClickQuickAdd}
								alreadyListed={props.alreadyListed}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
