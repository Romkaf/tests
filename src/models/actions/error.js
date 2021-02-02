import { SHOW_ERROR, HIDE_ERROR } from './actionTypes';

export const hideError = () => ({
	type: HIDE_ERROR,
});

export const showError = (text) => ({ type: SHOW_ERROR, payload: text });
