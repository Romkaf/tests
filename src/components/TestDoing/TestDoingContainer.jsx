import React from 'react';
import { connect } from 'react-redux';
import TestDoing from './TestDoing';
import { showModal } from '@models/actions';
import NotFoundPage from '@components/pages/NotFoundPage';
import PropTypes from 'prop-types';

const TestDoingContainer = ({ tests, id, showModal }) => {
	const test = tests.find((it) => it.id == id);

	if (!test) {
		return <NotFoundPage />;
	}

	return (
		<TestDoing
			questions={test.questions}
			title={test.title}
			onModalShow={showModal}
		/>
	);
};

TestDoingContainer.propTypes = {
	tests: PropTypes.array,
	showModal: PropTypes.func,
};

const mapStateToProps = ({ tests }) => ({ tests: tests.tests });

export default connect(mapStateToProps, { showModal })(TestDoingContainer);
