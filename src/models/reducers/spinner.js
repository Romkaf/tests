import { HIDE_SPINNER, SHOW_SPINNER } from '@models/actions/actionTypes';

export default (state = false, action) => {
	switch (action.type) {
		case SHOW_SPINNER:
			return true;

		case HIDE_SPINNER:
			return false;

		default:
			return state;
	}
};
