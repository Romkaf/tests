import { FETCH_TESTS_SUCCESS } from '@models/actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_TESTS_SUCCESS:
			return [...action.payload];

		default:
			return state;
	}
};
