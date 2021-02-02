import { put, delay } from 'redux-saga/effects';
import { showError, hideError } from '@models/actions';

export function* showAndHideError(text, error) {
	yield put(showError(`${text} ${error}`));
	yield delay(4000);
	yield put(hideError());
}
