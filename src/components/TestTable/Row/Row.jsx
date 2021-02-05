import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MODAL_QUEST_RUN_TEST } from '@constants';

const Row = ({ item, onModalShow, isAdmin }) => {
	const { title, created_at, id } = item;
	const date = new Date(created_at).toLocaleDateString();
	const history = useHistory();

	const handleRowClick = (evt) => {
		evt.target.tagName !== 'BUTTON' &&
			evt.target.tagName !== 'I' &&
			onModalShow(MODAL_QUEST_RUN_TEST, handleTestStart);
	};

	const handleBtnEditClick = () => history.push(`/management/${id}`);

	const handleTestStart = () => history.push(`/tests/${id}`);

	return (
		<tr className="btn-light" tabIndex="0" onClick={handleRowClick}>
			<td>{title}</td>
			<td>{date}</td>
			<td>
				{isAdmin && (
					<button
						className="btn btn-sm btn-outline-secondary float-right"
						title="Edit"
						onClick={handleBtnEditClick}
					>
						<i className="bi bi-pencil-square" />
					</button>
				)}
			</td>
		</tr>
	);
};

Row.propTypes = {
	item: PropTypes.object,
	onModalShow: PropTypes.func,
	isAdmin: PropTypes.bool,
};

export default Row;
