import React from 'react';
import QuestionItem from './QuestionItem/QuestionItem';
import PropTypes from 'prop-types';

const QuestionList = ({ questions, onSetTypeQuestion, onSetQuestion }) => {
	const wrapperSetQuestion = (question) => () => onSetQuestion(question);

	return (
		<>
			<h5>Questions:</h5>
			<ol className="container pr-0">
				{questions.map((it) => (
					<li className="alert alert-light" key={it.id}>
						<QuestionItem
							title={it.title}
							typeQuestion={it.question_type}
							onSetTypeQuestion={onSetTypeQuestion}
							onSetQuestion={wrapperSetQuestion(it)}
						/>
					</li>
				))}
			</ol>
		</>
	);
};

QuestionList.propTypes = {
	questions: PropTypes.array,
	onSetTypeQuestion: PropTypes.func,
	onSetQuestion: PropTypes.func,
};

export default QuestionList;
