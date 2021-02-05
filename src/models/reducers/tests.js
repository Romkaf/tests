import { FETCH_TESTS_SUCCESS, ADD_TEST } from '@models/actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_TESTS_SUCCESS:
			return [...action.payload];

		case ADD_TEST:
			return [...state, action.payload];

		default:
			return state;
	}
};
