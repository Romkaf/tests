import {
	FETCH_TESTS,
	FETCH_TESTS_SUCCESS,
	REQUEST_ADD_TEST,
	ADD_TEST,
} from './actionTypes';

export const fetchTests = () => ({ type: FETCH_TESTS });

export const fetchTestsSuccess = (tests) => ({
	type: FETCH_TESTS_SUCCESS,
	payload: tests,
});

export const requestAddTest = (title) => ({
	type: REQUEST_ADD_TEST,
	payload: title,
});

export const addTest = (title) => ({ type: ADD_TEST, payload: title });
