import React from 'react';
import './SideMenu.css';

class SideMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hidden: 'true' }
	}

	toggleMenu() {
		this.setState({ hidden: this.state.hidden === 'false' ? 'true' : 'false' });
	}

	render() {
		return (
			<div>
				<button className="side-menu-button" onClick={this.toggleMenu.bind(this)}>Menu</button>
				<div className={this.state.hidden === 'false' ? 'side-menu active-menu' : 'side-menu hidden-menu'}>
					<div className="sm-content">
					<ul className="sm-links">
						<li><a href="/">Home</a></li>
						<li><a href="/routing">Routing</a></li>
						<li><a href="/upcoming-movies">Upcoming Movies</a></li>
						<li><div onClick={this.toggleMenu.bind(this)}>Close</div></li>
					</ul>
					</div>
				</div>
			</div>
		);
		
	}
}

export default SideMenu;