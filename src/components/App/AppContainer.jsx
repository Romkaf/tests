import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const AppContainer = ({ user, error }) => <App user={user} error={error} />;

const mapStateToProps = ({ user, error }) => ({
	user,
	error,
});

export default connect(mapStateToProps, null)(AppContainer);
