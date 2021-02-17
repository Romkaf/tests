import React from 'react';
import QuestionItem from './QuestionItem/QuestionItem';
import PropTypes from 'prop-types';

const QuestionList = ({
	questions,
	onSetTypeQuestion,
	onSetQuestion,
	onRequestDeleteQuestion,
	onModalShow,
}) => {
	const wrapperSetQuestion = (question) => () => onSetQuestion(question);
	const wrappeRequestDeleteQuestion = (id) => () => onRequestDeleteQuestion(id);

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
							onRequestDeleteQuestion={wrappeRequestDeleteQuestion(it.id)}
							onModalShow={onModalShow}
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
	onRequestDeleteQuestion: PropTypes.func,
	onModalShow: PropTypes.func,
};

export default QuestionList;
