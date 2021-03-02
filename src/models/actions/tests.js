import {
	FETCH_TESTS,
	FETCH_TESTS_SUCCESS,
	REQUEST_ADD_TEST,
	ADD_TEST,
	REQUEST_DELETE_TEST,
	DELETE_TEST,
	REQUEST_EDIT_TEST,
	EDIT_TEST,
	SET_CURRENT_PAGE,
	SET_SORT_TYPE,
} from './actionTypes';

export const fetchTests = (currentPage, sortType, filter) => ({
	type: FETCH_TESTS,
	payload: { currentPage, sortType, filter },
});

export const fetchTestsSuccess = (data) => ({
	type: FETCH_TESTS_SUCCESS,
	payload: data,
});

export const requestAddTest = (title, history) => ({
	type: REQUEST_ADD_TEST,
	payload: { title, history },
});

export const addTest = (test) => ({ type: ADD_TEST, payload: test });

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
export const setCurrentPage = (page) => ({
	type: SET_CURRENT_PAGE,
	payload: page,
});
export const setSortType = (type) => ({ type: SET_SORT_TYPE, payload: type });
