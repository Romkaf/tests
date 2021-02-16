import {
	FETCH_TESTS_SUCCESS,
	ADD_TEST,
	ADD_SORT_TESTS,
	DELETE_TEST,
	ADD_QUESTION,
	UPDATE_QUESTION,
} from '@models/actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case FETCH_TESTS_SUCCESS || ADD_SORT_TESTS:
			return [...action.payload];

		case ADD_SORT_TESTS:
			return [...action.payload];

		case ADD_TEST:
			return [...state, action.payload];

		case DELETE_TEST:
			return state.filter((it) => action.payload !== it.id);

		case ADD_QUESTION:
			return state.map((it) =>
				it.id == action.payload.id
					? {
							...it,
							questions: [...it.questions, action.payload.data],
					  }
					: it,
			);

		case UPDATE_QUESTION:
			return state.map((it) =>
				it.id == action.payload.id
					? {
							...it,
							questions: it.questions.map((it) =>
								it.id == action.payload.data.id ? action.payload.data : it,
							),
					  }
					: it,
			);

		default:
			return state;
	}
};
