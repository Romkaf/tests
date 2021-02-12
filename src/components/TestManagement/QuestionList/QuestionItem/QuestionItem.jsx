import React from 'react';
import PropTypes from 'prop-types';

const QuestionItem = ({
	title,
	onSetTypeQuestion,
	typeQuestion,
	onSetQuestion,
}) => {
	const handleBtnEditClick = () => {
		onSetTypeQuestion(typeQuestion);
		onSetQuestion();
	};

	const handleBtnDeleteClick = () => {};

	return (
		<div className="d-flex align-items-center">
			<span className="flex-fill pr-1">{title}</span>
			<button
				className="btn btn-sm btn-outline-secondary float-right mr-3"
				onClick={handleBtnEditClick}
			>
				<i className="bi bi-pencil-square" />
			</button>
			<button
				className="btn btn-sm btn-outline-secondary float-right"
				onClick={handleBtnDeleteClick}
			>
				<i className="bi bi-x-square"></i>
			</button>
		</div>
	);
};

QuestionItem.propTypes = {
	title: PropTypes.string,
	typeQuestion: PropTypes.string,
	onSetTypeQuestion: PropTypes.func,
	onSetQuestion: PropTypes.func,
};

export default QuestionItem;
