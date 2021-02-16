import { all } from 'redux-saga/effects';
import users from './users';
import tests from './tests';
import questionsAnswers from './questionsAnswers';

export default function* () {
	yield all([users(), tests(), questionsAnswers()]);
}
