import { takeEvery, all, call, put, delay } from 'redux-saga/effects';
import {
	FETCH_REGISTRATION,
	FETCH_SIGNIN,
	SIGNOUT,
} from '@models/actions/actionTypes';
import { fetchSignupUser, fetchSigninUser, fetchSignoutUser } from '@api';
import {
	fetchSigninSuccess,
	toggleRegistration,
	showError,
	hideError,
} from '@models/actions';

function* showAndHideError(text, error) {
	yield put(showError(`${text} ${error}`));
	yield delay(4000);
	yield put(hideError());
}

function* workerFetchRegistration({ payload }) {
	try {
		yield fetchSignupUser(payload);
		yield put(toggleRegistration());
	} catch (error) {
		yield showAndHideError('Регистрация не удалась!', error);
	}
}

function* workerFetchSignin({ payload }) {
	try {
		const { data } = yield fetchSigninUser(payload);
		yield put(fetchSigninSuccess(data));
	} catch (error) {
		yield showAndHideError('Авторизация не удалась!', error);
	}
}

function* workerFetchSignout() {
	try {
		yield call(fetchSignoutUser);
	} catch (error) {
		yield console.log(error);
	}
}

export default function* () {
	yield all([
		takeEvery(FETCH_REGISTRATION, workerFetchRegistration),
		takeEvery(FETCH_SIGNIN, workerFetchSignin),
		takeEvery(SIGNOUT, workerFetchSignout),
	]);
}
