import React from 'react';
import Row from './Row';
// import styles from "./TestTable.module.scss";

const TestTable = ({ onModalShow }) => {
	const items = [
		{ title: 'Химия', date: '17-10-2009', id: 1 },
		{ title: 'Физика', date: '17-10-2009', id: 2 },
	];

	return (
		<div>
			<div className="d-flex flex-wrap pl-3 pr-3 mb-2 justify-content-start align-items-baseline">
				<label className="font-weight-bold mr-5">
					Filter
					<input type="text" className="ml-3" />
				</label>
				<button className="btn btn-sm btn-primary">Sort by date</button>
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
					{items.map((item) => (
						<Row item={item} onModalShow={onModalShow} key={item.id} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TestTable;
