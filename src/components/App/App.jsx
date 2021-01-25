import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import LoginPage from '@components/pages/LoginPage';
import NotFoundPage from '@components/pages/NotFoundPage';
import HomePage from '@components/pages/HomePage';
import ModalContainer from '@components/ModalContainer';

const App = () => {
	return (
		<Router>
			<div className="container">
				<ModalContainer />
				<Switch>
					<Redirect exact from="/" to="/login" />
					<Route exact path="/login" component={LoginPage} />
					<Route path="/home" component={HomePage} />
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
