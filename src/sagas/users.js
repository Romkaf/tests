import { takeEvery, all, call, put } from 'redux-saga/effects';
import {
	FETCH_REGISTRATION,
	FETCH_SIGNIN,
	SIGNOUT,
} from '@models/actions/actionTypes';
import { fetchSignupUser, fetchSigninUser, fetchSignoutUser } from '@api';
import { fetchSigninSuccess, toggleRegistration } from '@models/actions';

function* workerFetchRegistration({ payload }) {
	try {
		yield fetchSignupUser(payload);
		yield put(toggleRegistration());
	} catch (error) {
		yield console.log(error);
	}
}

function* workerFetchSignin({ payload }) {
	try {
		const { data } = yield fetchSigninUser(payload);
		yield put(fetchSigninSuccess(data));
	} catch (error) {
		yield console.log(error);
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
