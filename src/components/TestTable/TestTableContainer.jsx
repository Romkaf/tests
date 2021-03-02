import React, { useEffect } from 'react';
import TestTable from './TestTable';
import Spinner from '@components/Spinner';
import { connect } from 'react-redux';
import { showModal, fetchTests } from '@models/actions';
import PropTypes from 'prop-types';

const TestTableContainer = ({
	showModal,
	tests,
	isAdmin,
	filter,
	fetchTests,
	currentPage,
	sortType,
	spinner,
}) => {
	useEffect(() => fetchTests(currentPage, sortType, filter), [
		currentPage,
		sortType,
		filter,
	]);

	if (spinner) {
		return <Spinner />;
	}

	return <TestTable onModalShow={showModal} tests={tests} isAdmin={isAdmin} />;
};

TestTableContainer.propTypes = {
	tests: PropTypes.array,
	fetchTests: PropTypes.func,
	showModal: PropTypes.func,
	isAdmin: PropTypes.bool,
	filter: PropTypes.string,
	currentPage: PropTypes.number,
	sortType: PropTypes.string,
	spinner: PropTypes.bool,
};

const actions = {
	showModal,
	fetchTests,
};

const mapStateToProps = ({ tests, user, filter, spinner }) => ({
	tests: tests.tests,
	currentPage: tests.currentPage,
	sortType: tests.sortType,
	isAdmin: user?.is_admin,
	filter,
	spinner,
});

export default connect(mapStateToProps, actions)(TestTableContainer);
