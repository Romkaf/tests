import React, { useEffect } from 'react';
import TestTable from './TestTable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showModal, fetchTests } from '@models/actions';

const TestTableContainer = ({ showModal, tests, isAdmin, fetchTests }) => {
	useEffect(() => fetchTests(), []);

	return <TestTable onModalShow={showModal} tests={tests} isAdmin={isAdmin} />;
};

TestTableContainer.propTypes = {
	tests: PropTypes.array,
	fetchTests: PropTypes.func,
	showModal: PropTypes.func,
	isAdmin: PropTypes.bool,
};

const actions = {
	showModal,
	fetchTests,
};

const mapStateToProps = ({ tests, user }) => ({
	tests,
	isAdmin: user.is_admin,
});

export default connect(mapStateToProps, actions)(TestTableContainer);
