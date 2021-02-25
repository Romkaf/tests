import React from 'react';
import QuestionItem from './QuestionItem';
import PropsTypes from 'prop-types';

const QuestionList = ({ questions, count }) => {
	return (
		<div className="carousel slide mt-1">
			<ul className="list-unstyled carousel-inner">
				{questions.map((it, idx) => (
					<QuestionItem question={it} key={it.id} count={count} idx={idx} />
				))}
			</ul>
		</div>
	);
};

QuestionList.propTypes = {
	questions: PropsTypes.array,
	count: PropsTypes.number,
};

export default QuestionList;
