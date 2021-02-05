import React from 'react';
import { connect } from 'react-redux';
import { signOut, requestAddTest } from '@models/actions';
import HomePage from './HomePage';
import PropTypes from 'prop-types';

const HomePageContainer = ({ signOut, requestAddTest, isAdmin }) => (
	<HomePage
		onSignOut={signOut}
		onRequestAddTest={requestAddTest}
		isAdmin={isAdmin}
	/>
);

HomePageContainer.propTypes = {
	signOut: PropTypes.func,
	requestAddTest: PropTypes.func,
	isAdmin: PropTypes.bool,
};

const mapStateToProps = ({ user }) => ({
	isAdmin: user.is_admin,
});

const actions = { signOut, requestAddTest };

export default connect(mapStateToProps, actions)(HomePageContainer);
