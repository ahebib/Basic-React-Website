import { Link } from "react-router-dom";

function RoutingIndex() {
	return (
		<div className="routing-page">
			<h1 className="page-title">React Routing</h1>
			<p><i>react-router-dom</i> can be added in Index.js or App.js for routing purposes. For organization purposes pages have been separated into folders.</p>

			<Link className="back" to="/">Back</Link>
		</div>
	)
}

export default RoutingIndex;