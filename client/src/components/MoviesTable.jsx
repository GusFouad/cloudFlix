import React, { Component } from 'react';
import { getUser } from '../services/authService';
import { getMovies } from './../services/movieService';
import _ from 'lodash';
import MovieInfo from './MovieInfo';
class MoviesTable extends Component {
	columns = [
		{
			path: 'image',
			lable: 'Poster',
			content: (movie) => <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="Movie's poster" />
		},
		{ path: 'title', lable: 'Title' },
		{
			path: 'plot',
			lable: 'Plot',
			content: (movie) => <p>{movie.overview}</p>
		},
		{
			path: 'rating',
			lable: 'Rating',
			content: (movie) => <p>{movie.vote_average}</p>
		},
		{
			key: 'delete',
			content: (movie) => (
				<button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">
					Delete
				</button>
			)
		}
	];

	renderCell = (movie, column) => {
		if (column.content) return column.content(movie);
		if (column.content && column.path === 'poster') return column.content(movie);

		return _.get(movie, column.path);
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

	render() {
		const user = getUser();
		const { movies } = this.props;
		return (
			<div>
				<div className="table-media">
					<table className="table">
						<thead>
							<tr>
								{this.columns.map((column) => {
									return <th key={column.path || column.key}> {column.lable} </th>;
								})}
							</tr>
						</thead>
						<tbody>
							{movies.map((movie) => (
								<tr key={movie.id || movie.key}>
									{this.columns.map((column) => (
										<td key={column.key || column.path}>{this.renderCell(movie, column)}</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{/* <div className="table-small-media">
					<MovieInfo
						user={user}
						isAlreadyListed={this.isAlreadyListed}
						alreadyListed={this.state.alreadyListed}
						currentMovie={this.state.currentMovie}
						closeMovieInfo={this.closeMovieInfo}
						handleDelete={this.handleDelete}
					/>
				</div> */}
			</div>
		);
	}
}

export default MoviesTable;
