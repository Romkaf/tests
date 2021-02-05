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

const App = ({ user, error }) => {
	return (
		<Router>
			<div className="container">
				{error && <ErrorIndicator text={error} />}
				<ModalContainer />
				<Switch>
					<Route
						exact
						from="/"
						render={() => (user ? <HomePage /> : <Redirect to="/login" />)}
					/>
					<Route
						exact
						path="/login"
						render={() => (user ? <Redirect to="/" /> : <LoginPage />)}
					/>
					<Route path="/management" exact component={ManagementPage} />
					<Route
						path="/management/:id"
						render={({ match }) => <ManagementPage id={match?.params.id} />}
					/>
					{/* <Route path="/management" component={ManagementPage} /> */}
					<Route component={NotFoundPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
