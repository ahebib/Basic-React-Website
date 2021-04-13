import React from 'react';
import { Link } from "react-router-dom";
import './List.css';

class List extends React.Component {
	//List of goals for project
	render() {
		if (this.props.type === 'goals') {
			return (
				<div className="list">
			        <h2>Goals:</h2>
			        <ul>
			          <li><i>public</i> and <i>src</i> connections</li>
			          <li><Link to="/routing">Routing</Link></li>
			        </ul>
			    </div>
			)
		} else if (this.props.type === 'notes') {
			return (
				<div className="list">
					<h2>Note:</h2>
					<ul>
						<li>Header and Footer are examples of functions</li>
						<li>List is a example of a class</li>
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