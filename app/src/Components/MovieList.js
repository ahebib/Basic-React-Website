import React from 'react';
import MovieData from '../Sample/MovieData';

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
		//make a api call
		// fetch('')
		// 	.then(res => res.json())
		// 	.then(
		// 		(result) => {
		// 			this.setState({
		// 				dataRecieved: true,
		// 				result: result
		// 			});
		// 		},
		// 		(error) => {
		// 			this.setState({
		// 				dataRecieved: true,
		// 				error: error,
		// 			});
		// 		}
		// 	)

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
					<div>{this.state.result.map(movie => <div><b>{movie.title}</b>: {movie.releaseDate}</div>)}</div>
				);
			} else {
				return (<div><i>No movies found</i></div>)
			}
		}
	}
}

export default MovieList;