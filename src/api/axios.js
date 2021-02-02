import axios from 'axios';
import { baseURL, scopeKey } from '@constants';

export default axios.create({
	withCredentials: true,
	baseURL,
	headers: {
		'Content-Type': 'application/json',
		'scope-key': `${scopeKey}`,
	},
	responseType: 'json',
});
