import { takeEvery, all } from 'redux-saga/effects';
import { FETCH_REGISTRATION, FETCH_SIGNIN } from '@models/actions/actionTypes';
import { fetchPostUser } from '@api/request';

function* workerFetchRegistration({ payload }) {
	try {
		const { data } = yield fetchPostUser(payload);
		yield console.log(data);
	} catch (error) {
		yield console.log(error);
	}
}

export default function* () {
	yield all([takeEvery(FETCH_REGISTRATION, workerFetchRegistration)]);
}
