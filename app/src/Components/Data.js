import React from 'react';

class Data extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataRecieved: false,
			error: null,
			result: null
		}
	}

	componentDidMount() {
		//make the call
		fetch('')
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						dataRecieved: true,
						result: result
					});
				},
				(error) => {
					this.setState({
						dataRecieved: true,
						error: error,
					});
				}
			)
	}

	render() {
		if (this.state.error) {
			return (
				<div><i>{this.state.error}</i></div>
			);
		} else {
			return (
				<div>{this.state.result}</div>
			)
		}
		
	}
}

export default Data;