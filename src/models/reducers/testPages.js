import { SET_TEST_PAGES, SET_CURRENT_PAGE } from '@models/actions/actionTypes';

export default (
	state = { totalPages: 1, totalCount: 0, currentPage: 1 },
	action,
) => {
	switch (action.type) {
		case 'SET_TEST_PAGES':
			const { meta } = action.payload;
			return {
				...state,
				totalPages: meta.total_pages,
				totalCount: meta.total_count,
			};

		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.payload,
			};

		default:
			state;
	}
};
