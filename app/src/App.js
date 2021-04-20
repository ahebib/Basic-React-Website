import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Home/Index';
import RoutingPage from './Routing/Index';
import MoviesPage from './Movies/Index';
import './App.css';

function App() {
  return (
  	<div className="app-wrapper">
	  	<Router>
	  		<Switch>
	  			<Route path="/upcoming-movies">
			    	<MoviesPage />
			    </Route>
			    <Route path="/routing">
			    	<RoutingPage />
			    </Route>
			    <Route path="/">
			    	<HomePage />
			    </Route>
		    </Switch>
	    </Router>
    </div>
  );
}

export default App;