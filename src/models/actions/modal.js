import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

export const showModal = (text, func, singleBtnText) => {
	return {
		type: SHOW_MODAL,
		payload: { text, func, singleBtnText },
	};
};

export const hideModal = () => {
	return {
		type: HIDE_MODAL,
	};
};
