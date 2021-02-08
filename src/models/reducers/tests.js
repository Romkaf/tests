import {
	FETCH_TESTS_SUCCESS,
	ADD_TEST,
	ADD_SORT_TESTS,
} from '@models/actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_TESTS_SUCCESS || ADD_SORT_TESTS:
			return [...action.payload];

		case ADD_SORT_TESTS:
			return [...action.payload];

		case ADD_TEST:
			return [...state, action.payload];

		default:
			return state;
	}
};
