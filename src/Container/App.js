import "./App.css";
import { Route, Switch } from "react-router-dom";
//Components

import Level from "../Components/Level/Level";
import Home from "../Components/Home/Home";

function App() {
	document.body.oncontextmenu = (e) => e.preventDefault(); //disable rigth click
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/level/:level" component={Level} />
			</Switch>
		</div>
	);
}

export default App;
