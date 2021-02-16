import {
	REQUEST_CREATE_QUESTION,
	ADD_QUESTION,
	REQUEST_UPDATE_QUESTION,
	UPDATE_QUESTION,
	REQUEST_DELETE_QUESTION,
	DELETE_QUESTION,
} from './actionTypes';

export const requestCreateQuestion = (testId, data) => ({
	type: REQUEST_CREATE_QUESTION,
	payload: { testId, data },
});

export const requestUpdateQuestion = (testId, data) => ({
	type: REQUEST_UPDATE_QUESTION,
	payload: { testId, data },
});

export const addQuestion = (id, data) => ({
	type: ADD_QUESTION,
	payload: { id, data },
});

export const updateQuestion = (id, data) => ({
	type: UPDATE_QUESTION,
	payload: { id, data },
});

export const requestDeleteQuestion = (testId, questionId) => ({
	type: REQUEST_DELETE_QUESTION,
	payload: { testId, questionId },
});

export const deleteQuestion = (testId, questionId) => ({
	type: DELETE_QUESTION,
	payload: { testId, questionId },
});
