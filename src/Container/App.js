import './App.css';
import { Route, Switch } from 'react-router-dom';
//Components
import PwaButton from '../Components/PwaButton/PwaButton';
import Level from '../Components/Level/Level';
import Home from '../Components/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	document.body.oncontextmenu = (e) => e.preventDefault(); //disable rigth click

	return (
		<div className='App'>
			<PwaButton />
			<Switch>
				<Route exact path='/level/:level' component={Level} />
				<Route exact path='/' component={Home} />
			</Switch>
			<ToastContainer />
		</div>
	);
}

export default App;
