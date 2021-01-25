import React from 'react';
import styles from './Row.module.scss';
import { useHistory } from 'react-router-dom';

const Row = ({ item }) => {
	const { title, date } = item;
	const history = useHistory();

	const handleRowClick = (evt) => {
		evt.target.tagName !== 'BUTTON' &&
			evt.target.tagName !== 'I' &&
			console.log(evt.target.tagName);
		// showModal('Do you want to start the test?', handleTestStart);
	};

	// const handleTestStart = (id) => history.push(`/test${id}`);

	return (
		<tr className="btn-light" tabIndex="0" onClick={handleRowClick}>
			<td>{title}</td>
			<td>{date}</td>
			<td>
				<button className="btn btn-sm btn-outline-secondary float-right">
					<i className="bi bi-pencil-square" />
				</button>
			</td>
		</tr>
	);
};

export default Row;
