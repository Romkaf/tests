import React from 'react';
import TestManagementContainer from '@components/TestManagement';
import PropTypes from 'prop-types';

const ManagementPage = ({ id }) => {
	return <TestManagementContainer id={id} />;
};

ManagementPage.propTypes = {
	id: PropTypes.string,
};

export default ManagementPage;
