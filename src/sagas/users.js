import { takeEvery, all, delay, call } from 'redux-saga/effects';
import { FETCH_REGISTRATION, FETCH_SIGNIN } from '@models/actions/actionTypes';
import {
	fetchSignupUser,
	fetchSigninUser,
	fetchGetUser,
	fetchCreateTest,
} from '@api';

function* workerFetchRegistration({ payload }) {
	try {
		const { data } = yield fetchSignupUser(payload);
		yield console.log(data);
	} catch (error) {
		yield console.log(error);
	}
}

function* workerFetchSignin({ payload }) {
	try {
		const { data } = yield fetchSigninUser(payload);
		yield console.log(data);
		yield delay(3000);
		yield call(fetchGetUser);
	} catch (error) {
		yield console.log(error);
	}
}

export default function* () {
	yield all([
		takeEvery(FETCH_REGISTRATION, workerFetchRegistration),
		takeEvery(FETCH_SIGNIN, workerFetchSignin),
	]);
}
