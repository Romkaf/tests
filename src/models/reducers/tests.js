import {
	FETCH_TESTS_SUCCESS,
	ADD_TEST,
	ADD_SORT_TESTS,
	DELETE_TEST,
	ADD_QUESTION,
	UPDATE_QUESTION,
	DELETE_QUESTION,
} from '@models/actions/actionTypes';

export default (
	state = { tests: [], totalPages: 1, totalCount: 0 },
	action,
) => {
	switch (action.type) {
		case FETCH_TESTS_SUCCESS || ADD_SORT_TESTS:
			const { tests, meta } = action.payload;
			return {
				tests: [...tests],
				totalPages: meta.total_pages,
				totalCount: meta.total_count,
			};

		case ADD_SORT_TESTS:
			return {
				...state,
				tests: [...action.payload],
			};

		case ADD_TEST:
			return {
				...state,
				tests: [...state.tests, tests],
			};

		case DELETE_TEST:
			return {
				...state,
				tests: state.tests.filter((it) => action.payload !== it.id),
			};

		case ADD_QUESTION:
			return {
				...state,
				tests: state.tests.map((it) =>
					it.id == action.payload.id
						? {
								...it,
								questions: [...it.questions, action.payload.data],
						  }
						: it,
				),
			};

		case UPDATE_QUESTION:
			return {
				...state,
				tests: state.tests.map((it) =>
					it.id == action.payload.id
						? {
								...it,
								questions: it.questions.map((it) =>
									it.id == action.payload.data.id ? action.payload.data : it,
								),
						  }
						: it,
				),
			};

		case DELETE_QUESTION:
			return {
				...state,
				tests: state.tests.map((it) =>
					it.id == action.payload.testId
						? {
								...it,
								questions: it.questions.filter(
									(it) => it.id != action.payload.questionId,
								),
						  }
						: it,
				),
			};

		default:
			return state;
	}
};
