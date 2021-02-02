import React from 'react';
import QuestionItem from './QuestionItem/QuestionItem';

const QuestionList = ({ questions }) => {
	return (
		<ol className="container pr-0">
			{questions.map((it) => (
				<li className="alert alert-light" key={it.title}>
					<QuestionItem title={it.title} />
				</li>
			))}
		</ol>
	);
};

export default QuestionList;