import React from 'react';
import FormQuestion from './FormQuestion';
import { connect } from 'react-redux';
import { requestCreateQuestion, requestUpdateQuestion } from '@models/actions';
import { useLocation } from 'react-router-dom';

const FormQuestionContainer = (props) => {
	const location = useLocation();
	const testId = location.pathname.replace(/\/management\//, '');

	const onRequestCreateQuestion = (data) =>
		props.requestCreateQuestion(testId, data);

	const onRequestUpdateQuestion = (data) =>
		props.requestUpdateQuestion(testId, data);

	return (
		<FormQuestion
			onSetTypeQuestion={props.onSetTypeQuestion}
			typeQuestion={props.typeQuestion}
			question={props.question}
			onRequestCreateQuestion={onRequestCreateQuestion}
			onRequestUpdateQuestion={onRequestUpdateQuestion}
		/>
	);
};

const actions = { requestCreateQuestion, requestUpdateQuestion };

export default connect(null, actions)(FormQuestionContainer);
