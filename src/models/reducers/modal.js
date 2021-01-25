import { SHOW_MODAL, HIDE_MODAL } from '@models/actions/actionTypes';

const defaultState = { isShow: false };

export default (state = defaultState, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			const { text, func } = action.payload;
			return { isShow: true, text, func };

		case HIDE_MODAL:
			return { isShow: false };

		default:
			return state;
	}
};
