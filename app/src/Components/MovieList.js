import React from 'react';
import './MovieList.css';
import MovieData from '../SampleData/MovieData';

class MovieList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataRecieved: false,
			error: null,
			result: null
		}
	}

	componentDidMount() {
		this.setState({
			dataRecieved: true,
			result: MovieData
		});
	}

	render() {
		if (this.state.error) {
			return (
				<div><i>{this.state.error}</i></div>
			);
		} else {
			if (this.state.result) {
				return (
					<ul className="movie-list">{this.state.result.map(movie => <li><b>{movie.title}</b>: {movie.releaseDate}</li>)}</ul>
				);
			} else {
				return (<div><i>No movies found</i></div>)
			}
		}
	}
}

export default MovieList;