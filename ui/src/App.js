import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';

import './App.css';
import { SignIn, Wiki } from './features';
import { Loader } from './components';
import { useSelector } from 'react-redux';

function App() {
	const {
		utils: { isLoading },
		user: { isLoggedIn }
	} = useSelector((state) => state);
	return (
		<>
			{isLoading && <Loader />}
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						{isLoggedIn || localStorage.getItem('token') ? (
							<Redirect to="/wiki" />
						) : (
							<SignIn />
						)}
					</Route>
					<Route path="/" exact component={SignIn} />
					<Route path="/wiki" exact component={Wiki} />
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
