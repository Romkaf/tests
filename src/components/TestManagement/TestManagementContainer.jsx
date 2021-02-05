import React from 'react';
import { connect } from 'react-redux';
import TestManagement from './TestManagement';
import { requestAddTest } from '@models/actions';
import PropTypes from 'prop-types';

const TestManagementContainer = ({ requestAddTest, tests, id }) => {
	const test = tests.find((it) => it.id === +id) || null;

	return (
		<div className="pt-4 pb-4">
			<TestManagement test={test} onRequestAddTest={requestAddTest} />
		</div>
	);
};

TestManagementContainer.propTypes = {
	requestAddTest: PropTypes.func,
	tests: PropTypes.array,
	id: PropTypes.string,
};

const actions = { requestAddTest };

const mapStateToProps = ({ tests }) => ({ tests });

export default connect(mapStateToProps, actions)(TestManagementContainer);
