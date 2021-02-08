import { takeEvery, all, call, put, delay } from 'redux-saga/effects';
import { fetchGetTests, fetchCreateTest } from '@api';
import { fetchTestsSuccess, addTest, addSortTests } from '@models/actions';
import {
	FETCH_TESTS,
	REQUEST_ADD_TEST,
	SORT_TESTS,
} from '@models/actions/actionTypes';
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
		const { data } = yield fetchCreateTest(payload);
		yield put(addTest(data));
	} catch (error) {
		yield showAndHideError('Не удалось загрузить данные на сервер', error);
	}
}

function* workerFetchGetSortTest({ payload }) {
	try {
		const {
			data: { tests },
		} = yield fetchGetTests(`?sort=${payload}`);
		yield put(addSortTests(tests));
	} catch (error) {
		yield showAndHideError(
			'Не удалось выполнить загрузку данных с сервера',
			error,
		);
	}
}

export default function* () {
	yield all([
		takeEvery(FETCH_TESTS, workerFetchGetTests),
		takeEvery(REQUEST_ADD_TEST, workerFetchPostTest),
		takeEvery(SORT_TESTS, workerFetchGetSortTest),
	]);
}
