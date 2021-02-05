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

export const requestAddTest = (data) => ({
	type: REQUEST_ADD_TEST,
	payload: data,
});

export const addTest = (data) => ({ type: ADD_TEST, payload: data });
