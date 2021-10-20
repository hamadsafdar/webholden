import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { SignIn, Wiki } from './features';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={SignIn} />
				<Route path="/wiki" exact component={Wiki} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
