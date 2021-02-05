import React from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

const TestTable = ({ onModalShow, tests, isAdmin }) => {
	const items = [
		{ title: 'Химия', date: '17-10-2009', id: 1 },
		{ title: 'Физика', date: '17-10-2009', id: 2 },
	];

	return (
		<div>
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
