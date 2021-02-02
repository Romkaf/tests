import axios from '@api/axios';

const requestFn = (method) => (url, params = {}) => axios[method](url, params);

export const getRequest = requestFn('get');
export const postRequest = requestFn('post');
export const deleteRequest = requestFn('delete');
export const patchRequest = requestFn('patch');
