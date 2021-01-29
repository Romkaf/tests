import React from 'react';

const QuestionItem = ({ title }) => {
	return (
		<div className="d-flex align-items-center">
			<span className="flex-fill pr-1">{title}</span>
			<button className="btn btn-sm btn-outline-secondary float-right mr-3">
				<i className="bi bi-pencil-square" />
			</button>
			<button className="btn btn-sm btn-outline-secondary float-right">
				<i className="bi bi-x-square"></i>
			</button>
		</div>
	);
};

export default QuestionItem;
