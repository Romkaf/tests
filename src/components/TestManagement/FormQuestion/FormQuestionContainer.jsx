import React from 'react';
import FormQuestion from './FormQuestion';
import { connect } from 'react-redux';
import { requestCreateQuestion, requestUpdateQuestion } from '@models/actions';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

FormQuestionContainer.propTypes = {
	question: PropTypes.object || null,
	typeQuestion: PropTypes.string,
	onSetTypeQuestion: PropTypes.func,
	requestCreateQuestion: PropTypes.func,
	requestUpdateQuestion: PropTypes.func,
};

const actions = { requestCreateQuestion, requestUpdateQuestion };

export default connect(null, actions)(FormQuestionContainer);
