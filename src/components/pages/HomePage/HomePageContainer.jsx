import React from 'react';
import { connect } from 'react-redux';
import { signOut, requestAddTest, setSortType } from '@models/actions';
import HomePage from './HomePage';
import PropTypes from 'prop-types';

const HomePageContainer = ({
	signOut,
	requestAddTest,
	isAdmin,
	setSortType,
	sortType,
}) => (
	<HomePage
		onSignOut={signOut}
		onRequestAddTest={requestAddTest}
		isAdmin={isAdmin}
		onSortTypeSet={setSortType}
		sortType={sortType}
	/>
);

HomePageContainer.propTypes = {
	signOut: PropTypes.func,
	requestAddTest: PropTypes.func,
	isAdmin: PropTypes.bool,
	setSortType: PropTypes.func,
	sortType: PropTypes.string,
};

const mapStateToProps = ({ user, tests }) => ({
	isAdmin: user?.is_admin,
	sortType: tests.sortType,
});

const actions = { signOut, requestAddTest, setSortType };

export default connect(mapStateToProps, actions)(HomePageContainer);
