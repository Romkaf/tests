import { FETCH_SIGNIN_SUCCESS, SIGNOUT } from '@models/actions/actionTypes';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_SIGNIN_SUCCESS:
			return { ...action.payload };

		case SIGNOUT:
			return null;

		default:
			return state;
	}
};
