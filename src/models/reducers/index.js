import { combineReducers } from 'redux';
import modal from './modal';
import user from './user';
import registration from './registration';

export default combineReducers({
	modal,
	user,
	registration,
});
