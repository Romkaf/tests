import {
	getRequest,
	postRequest,
	deleteRequest,
	patchRequest,
} from './request';

export const fetchSignupUser = (data) => postRequest(`/signup`, data);
export const fetchSigninUser = (data) => postRequest(`/signin`, data);
export const fetchSignoutUser = () => deleteRequest(`/logout`);
export const fetchGetUser = () => getRequest('/users/current');
export const fetchCreateTest = (data) => postRequest(`/tests`, data);
export const fetchGetTests = (param = '') => getRequest(`/tests${param}`);
export const fetchDeleteTest = (id) => deleteRequest(`/tests/${id}`);
export const fetchCreateQuestion = (id, data) =>
	postRequest(`/tests/${id}/questions`, data);
export const fetchCreateAnswer = (id, data) =>
	postRequest(`/questions/${id}/answers`, data);
export const fetchUpdateQuestion = (id, data) =>
	patchRequest(`/questions/${id}`, data);
export const fetchUpdateAnswer = (id, data) =>
	patchRequest(`/answers/${id}`, data);
export const fetchMoveAnswer = (id, position) =>
	patchRequest(`/answers/${id}/insert_at/${position}`);
export const fetchDeleteQuestion = (id) => deleteRequest(`/questions/${id}`);
