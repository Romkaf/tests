import { HIDE_ERROR, SHOW_ERROR } from '@models/actions/actionTypes';

export default (state = '', action) => {
	switch (action.type) {
		case SHOW_ERROR:
			return action.payload;

		case HIDE_ERROR:
			return null;

		default:
			return state;
	}
};
