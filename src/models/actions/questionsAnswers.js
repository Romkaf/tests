import {
	REQUEST_CREATE_QUESTION,
	ADD_QUESTION,
	REQUEST_UPDATE_QUESTION,
	UPDATE_QUESTION,
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
