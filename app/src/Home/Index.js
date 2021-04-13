import List from '../Components/List';

function HomeIndex() {
	return (
		<div className="home-page">
			<h1 className="page-title">React Template</h1>
			<List type={"goals"} />
			<List type={"notes"} />
		</div>
	)
}

export default HomeIndex;