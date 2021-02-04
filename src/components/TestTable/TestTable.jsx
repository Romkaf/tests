import React from 'react';
import Row from './Row';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TestTable = ({ onModalShow, tests, isAdmin }) => {
	const items = [
		{ title: 'Химия', date: '17-10-2009', id: 1 },
		{ title: 'Физика', date: '17-10-2009', id: 2 },
	];

	return (
		<div>
			<div className="d-flex flex-wrap pl-3 pr-3 mb-2 justify-content-start align-items-baseline">
				<label className="font-weight-bold">
					Filter
					<input type="text" className="ml-3" />
				</label>
				<div className="mt-1 mb-1">
					<button className="btn btn-sm btn-primary ml-4">Sort by date</button>
					{isAdmin && (
						<Link to="/management" className="btn btn-sm btn-primary ml-4">
							Add test
						</Link>
					)}
				</div>
			</div>

			<table className="table">
				<thead>
					<tr>
						<th>Test</th>
						<th>Date</th>
						<th></th>
					</tr>
				</thead>

				<tbody>
					{tests.map((item) => (
						<Row
							item={item}
							onModalShow={onModalShow}
							key={item.id}
							isAdmin={isAdmin}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

TestTable.propTypes = {
	tests: PropTypes.array,
	onModalShow: PropTypes.func,
	isAdmin: PropTypes.bool,
};

export default TestTable;
