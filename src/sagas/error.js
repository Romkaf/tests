import { put, delay } from 'redux-saga/effects';
import { showError, hideError } from '@models/actions';

export function* showAndHideError(text, error) {
	yield put(showError(`${text} ${error}`));
	yield delay(7000);
	yield put(hideError());
}
