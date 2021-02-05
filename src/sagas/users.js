import { takeEvery, all, call, put } from 'redux-saga/effects';
import {
	FETCH_REGISTRATION,
	FETCH_SIGNIN,
	SIGNOUT,
} from '@models/actions/actionTypes';
import {
	fetchSignupUser,
	fetchSigninUser,
	fetchSignoutUser,
	fetchGetUser,
} from '@api';
import { fetchSigninSuccess, toggleRegistration } from '@models/actions';
import { showAndHideError } from './error';

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
		yield fetchGetUser();
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

export default function* rootSaga() {
	yield all([
		takeEvery(FETCH_REGISTRATION, workerFetchRegistration),
		takeEvery(FETCH_SIGNIN, workerFetchSignin),
		takeEvery(SIGNOUT, workerFetchSignout),
	]);
}
