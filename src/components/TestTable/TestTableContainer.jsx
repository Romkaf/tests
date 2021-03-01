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
}) => {
	useEffect(() => fetchTests(currentPage), [currentPage]);

	const isInclude = (str) => str.toUpperCase().includes(filter.toUpperCase());
	const visibleTests = filter
		? tests.filter((it) => isInclude(it.title))
		: tests;

	return (
		<TestTable onModalShow={showModal} tests={visibleTests} isAdmin={isAdmin} />
	);
};

TestTableContainer.propTypes = {
	tests: PropTypes.array,
	fetchTests: PropTypes.func,
	showModal: PropTypes.func,
	isAdmin: PropTypes.bool,
	filter: PropTypes.string,
	currentPage: PropTypes.number,
};

const actions = {
	showModal,
	fetchTests,
};

const mapStateToProps = ({ tests, user, filter }) => ({
	tests: tests.tests,
	currentPage: tests.currentPage,
	isAdmin: user?.is_admin,
	filter,
});

export default connect(mapStateToProps, actions)(TestTableContainer);
