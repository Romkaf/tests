import React from 'react';
import { connect } from 'react-redux';
import App from './App';

const AppContainer = ({ user }) => <App user={user} />;

const mapStateToProps = ({ user }) => ({
	user,
});

export default connect(mapStateToProps, null)(AppContainer);
