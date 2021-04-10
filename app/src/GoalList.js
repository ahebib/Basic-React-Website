import React from 'react';
import './GoalList.css';

class GoalList extends React.Component {
	render() {
		return (
			<div className="to-do">
		        <h2>To-Do:</h2>
		        <ul>
		          <li>Test connections between public files and src</li>
		          <li>Figure out routing</li>
		        </ul>
		    </div>
		)
	}
}

export default GoalList;