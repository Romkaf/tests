import { TOGGLE_REGISTRATION } from '@models/actions/actionTypes';

export default (state = true, action) => {
	switch (action.type) {
		case TOGGLE_REGISTRATION:
			return !state;

		default:
			return state;
	}
};
