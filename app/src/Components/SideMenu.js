import './SideMenu.css';

function SideMenu() {
	return (
		<div className="side-menu">
			<ul className="sm-links">
				<li><a href="/">Home</a></li>
				<li><a href="/routing">Routing</a></li>
			</ul>
		</div>
	)
}

export default SideMenu;