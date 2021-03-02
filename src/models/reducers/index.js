import { combineReducers } from 'redux';
import modal from './modal';
import user from './user';
import registration from './registration';
import error from './error';
import tests from './tests';
import filter from './filter';
import spinner from './spinner';

export default combineReducers({
	modal,
	user,
	registration,
	error,
	tests,
	filter,
	spinner,
});
