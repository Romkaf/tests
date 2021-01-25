import React from 'react';
import { Link } from 'react-router-dom';
import TestTable from '../../TestTable';

const HomePage = () => {
	return (
		<div>
			<div
				className="d-flex  flex-md-row  p-3 px-md-4 mb-3
     border-bottom"
			>
				<h2 className="my-0 mr-md-auto font-weight-normal">Tests</h2>
				<Link className="btn btn-primary ml-auto" to="/login">
					Log Out
				</Link>
			</div>
			<TestTable />
		</div>
	);
};

export default HomePage;
