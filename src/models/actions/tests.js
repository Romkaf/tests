import {
	FETCH_TESTS,
	FETCH_TESTS_SUCCESS,
	REQUEST_ADD_TEST,
	ADD_TEST,
	REQUEST_DELETE_TEST,
	DELETE_TEST,
	SORT_TESTS,
	ADD_SORT_TESTS,
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

export const requestDeleteTest = (id) => ({
	type: REQUEST_DELETE_TEST,
	payload: id,
});

export const deleteTest = (id) => ({ type: DELETE_TEST, payload: id });
