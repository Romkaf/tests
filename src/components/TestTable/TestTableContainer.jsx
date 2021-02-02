import React, { useEffect } from 'react';
import TestTable from './TestTable';
import { connect } from 'react-redux';
import { showModal } from '@models/actions';
import { fetchTests } from '@models/actions';

const TestTableContainer = ({ showModal, tests, fetchTests }) => {
	useEffect(() => fetchTests(), []);

	return <TestTable onModalShow={showModal} tests={tests} />;
};

const actions = {
	showModal,
	fetchTests,
};

const mapStateToProps = ({ tests }) => ({ tests });

export default connect(mapStateToProps, actions)(TestTableContainer);
