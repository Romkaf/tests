import { SHOW_MODAL, HIDE_MODAL } from '@models/actions/actionTypes';

export default (state = false, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return { ...action.payload };

		case HIDE_MODAL:
			return false;

		default:
			return state;
	}
};
