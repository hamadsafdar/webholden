import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import { SignIn, Wiki } from './features';
import { Loader } from './components';
import { useSelector } from 'react-redux';

function App() {
	const { isLoading } = useSelector((state) => state.utils);
	return (
		<>
			{isLoading && <Loader />}
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={SignIn} />
					<Route path="/wiki" exact component={Wiki} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
