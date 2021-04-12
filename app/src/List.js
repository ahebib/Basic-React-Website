import React from 'react';
import './List.css';

class List extends React.Component {
	//List of goals for project
	render() {
		if (this.props.type === 'to-do') {
			return (
				<div className="list">
			        <h2>To-Do:</h2>
			        <ul>
			          <li>Test connections between public files and src</li>
			          <li>Figure out routing</li>
			        </ul>
			    </div>
			)
		} else if (this.props.type === 'other') {
			return (
				<div className="list">
					<h2>Other</h2>
					<ul>
						<li>Classes vs Functions</li>
					</ul>
				</div>
			)
		} else {
			return (
				<div className="list">
					<p>No Items Found</p>
				</div>
			)
		}
	}
}

export default List;