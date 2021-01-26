import axios from '@api/axios';

export const fetchPostUser = (data) => axios.post(`/signup`, data);
