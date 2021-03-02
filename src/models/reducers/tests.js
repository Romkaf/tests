import {
	FETCH_TESTS_SUCCESS,
	ADD_TEST,
	DELETE_TEST,
	ADD_QUESTION,
	UPDATE_QUESTION,
	DELETE_QUESTION,
	SET_CURRENT_PAGE,
	SET_SORT_TYPE,
} from '@models/actions/actionTypes';

export default (
	state = {
		tests: [],
		totalPages: 0,
		totalCount: 0,
		currentPage: 1,
		sortType: 'created_at_desc',
	},
	action,
) => {
	switch (action.type) {
		case FETCH_TESTS_SUCCESS:
			const { tests, meta } = action.payload;
			return {
				...state,
				tests: [...tests],
				totalPages: meta.total_pages,
				totalCount: meta.total_count,
			};

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};

		case SET_SORT_TYPE:
			return {
				...state,
				sortType: action.payload,
			};

		case ADD_TEST:
			return {
				...state,
				tests: [...state.tests, action.payload],
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
