import { takeEvery, all, call, put, delay } from 'redux-saga/effects';
import { fetchGetTests, fetchCreateTest } from '@api';
import { fetchTestsSuccess, addTest } from '@models/actions';
import { FETCH_TESTS, REQUEST_ADD_TEST } from '@models/actions/actionTypes';
import { showAndHideError } from './error';

function* workerFetchGetTests() {
	try {
		const {
			data: { tests },
		} = yield fetchGetTests();
		yield put(fetchTestsSuccess(tests));
	} catch (error) {
		yield showAndHideError(
			'Не удалось выполнить загрузку данных с сервера',
			error,
		);
	}
}

function* workerFetchPostTest({ payload }) {
	try {
		yield console.log(payload);
		const { data } = yield fetchCreateTest(payload);
		yield console.log(data);
	} catch (error) {
		yield console.log(error);
	}
}

export default function* () {
	yield all([
		takeEvery(FETCH_TESTS, workerFetchGetTests),
		takeEvery(REQUEST_ADD_TEST, workerFetchPostTest),
	]);
}
