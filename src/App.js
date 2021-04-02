import "./App.css";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

//Components
import Home from "./pages/Home";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";

function App() {
  document.body.oncontextmenu = (e) => e.preventDefault(); //disable rigth click
	return (
		<div className="App">
			<Switch>
				<Route exact path={routes.HOME} component={Home}/>
				<Route exact path={routes.EASY} component={Easy}/>
				<Route exact path={routes.MEDIUM} component={Medium}/>
				<Route exact path={routes.HARD} component={Hard}/>
			</Switch>
		</div>
	);
}

export default App;
