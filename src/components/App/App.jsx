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
import ModalContainer from '@components/Modal';
import ManagementPage from '@components/pages/ManagementPage';
import ErrorIndicator from '@components/ErrorIndicator';
import TestPage from '@components/pages/TestPage';

const App = ({ user, error }) => {
	return (
		<Router>
			<div className="container">
				{error && <ErrorIndicator text={error} />}
				<ModalContainer />
				<Switch>
					<Route
						exact
						path="/"
						render={() =>
							user ? <Redirect to="/tests" /> : <Redirect to="/login" />
						}
					/>
					<Route
						path="/login"
						render={() => (user ? <Redirect to="/tests" /> : <LoginPage />)}
					/>
					<Route
						path="/tests"
						exact
						render={() => (user ? <HomePage /> : <Redirect to="/login" />)}
					/>
					<Route
						path="/tests/:id"
						render={({ match }) => <TestPage id={match?.params.id} />}
					/>
					<Route
						path="/management/:id"
						render={({ match }) => <ManagementPage id={match?.params.id} />}
					/>
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
