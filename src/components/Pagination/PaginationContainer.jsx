import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { setCurrentPage } from '@models/actions';

const PaginationContainer = ({ totalPages, currentPage, setCurrentPage }) => {
	return (
		<Pagination
			totalPages={totalPages}
			currentPage={currentPage}
			onCurrentPageSet={setCurrentPage}
		/>
	);
};

const mapStateToProps = ({ tests }) => ({
	totalPages: tests.totalPages,
	currentPage: tests.currentPage,
});

export default connect(mapStateToProps, { setCurrentPage })(
	PaginationContainer,
);
