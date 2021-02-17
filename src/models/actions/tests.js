import {
	FETCH_TESTS,
	FETCH_TESTS_SUCCESS,
	REQUEST_ADD_TEST,
	ADD_TEST,
	REQUEST_DELETE_TEST,
	DELETE_TEST,
	SORT_TESTS,
	ADD_SORT_TESTS,
	REQUEST_EDIT_TEST,
	EDIT_TEST,
} from './actionTypes';

export const fetchTests = () => ({ type: FETCH_TESTS });

export const fetchTestsSuccess = (tests) => ({
	type: FETCH_TESTS_SUCCESS,
	payload: tests,
});

export const requestAddTest = (data) => ({
	type: REQUEST_ADD_TEST,
	payload: data,
});

export const addTest = (data) => ({ type: ADD_TEST, payload: data });

export const sortTests = (str) => ({ type: SORT_TESTS, payload: str });

export const addSortTests = (tests) => ({
	type: ADD_SORT_TESTS,
	payload: tests,
});

export const requestDeleteTest = (id, history) => ({
	type: REQUEST_DELETE_TEST,
	payload: { id, history },
});

export const requestEditTest = (id, value, history) => ({
	type: REQUEST_EDIT_TEST,
	payload: { id, value, history },
});

export const deleteTest = (id) => ({ type: DELETE_TEST, payload: id });
export const editTest = (id) => ({ type: EDIT_TEST, payload: id });
