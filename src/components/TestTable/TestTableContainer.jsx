import React, { useEffect } from 'react';
import TestTable from './TestTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal, fetchTests } from '@models/actions';

const TestTableContainer = ({
	showModal,
	tests,
	isAdmin,
	filter,
	fetchTests,
	currentPage,
	sortType,
}) => {
	useEffect(() => fetchTests(currentPage, sortType, filter), [
		currentPage,
		sortType,
		filter,
	]);

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
};

const actions = {
	showModal,
	fetchTests,
};

const mapStateToProps = ({ tests, user, filter }) => ({
	tests: tests.tests,
	currentPage: tests.currentPage,
	sortType: tests.sortType,
	isAdmin: user?.is_admin,
	filter,
});

export default connect(mapStateToProps, actions)(TestTableContainer);
