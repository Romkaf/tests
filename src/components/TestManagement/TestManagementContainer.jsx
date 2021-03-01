import React from 'react';
import { connect } from 'react-redux';
import TestManagement from './TestManagement';
import { requestDeleteTest, showModal, requestEditTest } from '@models/actions';
import PropTypes from 'prop-types';

const TestManagementContainer = ({
	tests,
	id,
	showModal,
	requestDeleteTest,
	requestEditTest,
}) => {
	const test = tests.find((it) => it.id === +id) || null;

	return (
		<div className="pt-4 pb-4">
			<TestManagement
				test={test}
				onModalShow={showModal}
				onRequestDeleteTest={requestDeleteTest}
				onRequestEditTest={requestEditTest}
			/>
		</div>
	);
};

TestManagementContainer.propTypes = {
	tests: PropTypes.array,
	id: PropTypes.string,
	showModal: PropTypes.func,
	requestDeleteTest: PropTypes.func,
	requestEditTest: PropTypes.func,
};

const actions = { showModal, requestDeleteTest, requestEditTest };

const mapStateToProps = ({ tests }) => ({ tests: tests.tests });

export default connect(mapStateToProps, actions)(TestManagementContainer);
