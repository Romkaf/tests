import React from 'react';
import { connect } from 'react-redux';
import TestDoing from './TestDoing';
import PropTypes from 'prop-types';

const TestDoingContainer = ({ tests, id }) => {
	const test = tests.find((it) => it.id == id);

	return <TestDoing questions={test.questions} title={test.title} />;
};

TestDoingContainer.propTypes = {
	tests: PropTypes.array,
};

const mapStateToProps = ({ tests }) => ({ tests });

export default connect(mapStateToProps, null)(TestDoingContainer);
