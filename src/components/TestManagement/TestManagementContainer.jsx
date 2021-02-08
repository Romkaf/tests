import React from 'react';
import { connect } from 'react-redux';
import TestManagement from './TestManagement';
import { requestDeleteTest, showModal } from '@models/actions';
import PropTypes from 'prop-types';

const TestManagementContainer = ({
	tests,
	id,
	showModal,
	requestDeleteTest,
}) => {
	const test = tests.find((it) => it.id === +id) || null;

	return (
		<div className="pt-4 pb-4">
			<TestManagement
				test={test}
				onModalShow={showModal}
				onRequestDeleteTest={requestDeleteTest}
			/>
		</div>
	);
};

TestManagementContainer.propTypes = {
	tests: PropTypes.array,
	id: PropTypes.string,
	showModal: PropTypes.func,
	requestDeleteTest: PropTypes.func,
};

const actions = { showModal, requestDeleteTest };

const mapStateToProps = ({ tests }) => ({ tests });

export default connect(mapStateToProps, actions)(TestManagementContainer);
