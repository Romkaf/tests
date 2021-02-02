import { all } from 'redux-saga/effects';
import users from './users';
import tests from './tests';

export default function* () {
	yield all([users(), tests()]);
}
