import {
	SHOW_MODAL,
	HIDE_MODAL,
	FETCH_REGISTRATION,
	FETCH_SIGNIN,
} from './actionTypes';

export const showModal = (text, func) => {
	return {
		type: SHOW_MODAL,
		payload: { text, func },
	};
};

export const hideModal = () => {
	return {
		type: HIDE_MODAL,
	};
};

export const fetchRegistration = (data) => {
	return {
		type: FETCH_REGISTRATION,
		payload: data,
	};
};

export const fetchSignin = (data) => {
	return {
		type: FETCH_SIGNIN,
		payload: data,
	};
};
