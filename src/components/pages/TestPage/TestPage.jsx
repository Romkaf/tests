import React from 'react';
import PropTypes from 'prop-types';

const TestPage = ({ id }) => {
	return <div>This is Test Page {id}!</div>;
};

TestPage.propTypes = {
	id: PropTypes.string,
};

export default TestPage;
