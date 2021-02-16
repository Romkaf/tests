import React from 'react';
import QuestionList from './QuestionList';
import { connect } from 'react-redux';
import { requestDeleteQuestion, showModal } from '@models/actions';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const QuestionListContainer = (props) => {
	const location = useLocation();
	const testId = location.pathname.replace(/\/management\//, '');

	const onRequestDeleteQuestion = (questionId) =>
		props.requestDeleteQuestion(testId, questionId);

	return (
		<QuestionList
			questions={props.questions}
			onSetTypeQuestion={props.onSetTypeQuestion}
			onSetQuestion={props.onSetQuestion}
			onRequestDeleteQuestion={onRequestDeleteQuestion}
			onModalShow={props.showModal}
		/>
	);
};

QuestionList.propTypes = {
	questions: PropTypes.array,
	onSetTypeQuestion: PropTypes.func,
	onSetQuestion: PropTypes.func,
	requestDeleteQuestion: PropTypes.func,
	showModal: PropTypes.func,
};

const actions = { requestDeleteQuestion, showModal };

export default connect(null, actions)(QuestionListContainer);
