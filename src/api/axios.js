import axios from 'axios';
import { baseURL, scopeKey } from '@constants';

export default axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
		'scope-key': `${scopeKey}`,
	},
	responseType: 'json',
});
