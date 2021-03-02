import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TestTableContainer from '@components/TestTable';
import InputGroup from '@components/InputGroup';
import PropTypes from 'prop-types';
import Pagination from '../../Pagination';

const HomePage = ({
	onSignOut,
	onRequestAddTest,
	isAdmin,
	onSortTypeSet,
	sortType,
}) => {
	const [isNewTest, setIsNewTest] = useState(false);

	const handleNewTestShow = () => {
		setIsNewTest(true);
	};

	const handleNewTestHide = () => {
		setIsNewTest(false);
	};

	const handleTestsSort = () => {
		sortType === 'created_at_desc'
			? onSortTypeSet('created_at_asc')
			: onSortTypeSet('created_at_desc');
	};

	return (
		<div>
			<div
				className="d-flex  flex-md-row  p-3 px-md-4 mb-3
     border-bottom"
			>
				<h2 className="my-0 mr-md-auto font-weight-normal">Tests</h2>
				<Link
					className="btn btn-primary ml-auto"
					to="/login"
					onClick={onSignOut}
				>
					Log Out
				</Link>
			</div>
			<InputGroup
				title="Filter"
				btnTitle1="Sort by date"
				btnTitle2="New Test"
				funcBtn1={handleTestsSort}
				funcBtn2={handleNewTestShow}
				isAdmin={isAdmin}
			/>
			{isNewTest && (
				<InputGroup
					title="Test title"
					btnTitle1="Cansel"
					btnTitle2="Create"
					funcBtn1={handleNewTestHide}
					funcBtn2={onRequestAddTest}
					isAdmin={isAdmin}
				/>
			)}
			<Pagination />
			<TestTableContainer />
		</div>
	);
};

HomePage.propTypes = {
	onSignOut: PropTypes.func,
	onRequestAddTest: PropTypes.func,
	isAdmin: PropTypes.bool,
	onSortTypeSet: PropTypes.func,
	sortType: PropTypes.string,
};

export default HomePage;
