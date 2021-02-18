import React from 'react';
import { connect } from 'react-redux';
import { signOut, requestAddTest, sortTests } from '@models/actions';
import HomePage from './HomePage';
import PropTypes from 'prop-types';

const HomePageContainer = ({ signOut, requestAddTest, isAdmin, sortTests }) => (
	<HomePage
		onSignOut={signOut}
		onRequestAddTest={requestAddTest}
		isAdmin={isAdmin}
		onTestsSort={sortTests}
	/>
);

HomePageContainer.propTypes = {
	signOut: PropTypes.func,
	requestAddTest: PropTypes.func,
	isAdmin: PropTypes.bool,
	sortTests: PropTypes.func,
};

const mapStateToProps = ({ user }) => ({
	isAdmin: user?.is_admin,
});

const actions = { signOut, requestAddTest, sortTests };

export default connect(mapStateToProps, actions)(HomePageContainer);
