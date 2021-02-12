import React from 'react';
import QuestionItem from './QuestionItem/QuestionItem';

const QuestionList = ({ questions }) => {
	return (
		<>
			<h5>Questions:</h5>
			<ol className="container pr-0">
				{questions.map((it) => (
					<li className="alert alert-light" key={it.id}>
						<QuestionItem title={it.title} />
					</li>
				))}
			</ol>
		</>
	);
};

export default QuestionList;
