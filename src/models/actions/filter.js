import { CHANGE_FILTER } from './actionTypes';

export const changeFilter = (value) => ({
	type: CHANGE_FILTER,
	payload: value,
});
