import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

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
