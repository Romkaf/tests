import { FETCH_TESTS, FETCH_TESTS_SUCCESS } from './actionTypes';

export const fetchTests = () => ({ type: FETCH_TESTS });

export const fetchTestsSuccess = (tests) => ({
	type: FETCH_TESTS_SUCCESS,
	payload: tests,
});
