import { combineReducers } from 'redux';
import modal from './modal';
import user from './user';
import registration from './registration';
import error from './error';

export default combineReducers({
	modal,
	user,
	registration,
	error,
});
