import React from 'react';
import PropTypes from 'prop-types';
import TestDoing from '@components/TestDoing';

const TestPage = ({ id }) => {
	return <TestDoing id={id} />;
};

TestPage.propTypes = {
	id: PropTypes.string,
};

export default TestPage;
