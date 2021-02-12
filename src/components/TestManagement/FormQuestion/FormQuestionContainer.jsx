import React from 'react';
import FormQuestion from './FormQuestion';
import { connect } from 'react-redux';
import { requestCreateQuestion } from '@models/actions';
import { useLocation } from 'react-router-dom';

const FormQuestionContainer = (props) => {
	const location = useLocation();
	const testId = location.pathname.replace(/\/management\//, '');

	const onRequestCreateQuestion = (data) =>
		props.requestCreateQuestion(testId, data);

	return (
		<FormQuestion
			onSetTypeQuestion={props.onSetTypeQuestion}
			typeQuestion={props.typeQuestion}
			question={props.question}
			onRequestCreateQuestion={onRequestCreateQuestion}
		/>
	);
};

export default connect(null, { requestCreateQuestion })(FormQuestionContainer);
