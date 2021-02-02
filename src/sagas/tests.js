import { takeEvery, all, call, put, delay } from 'redux-saga/effects';
import { fetchGetTests } from '@api';
import { fetchTestsSuccess } from '@models/actions';
import { FETCH_TESTS } from '@models/actions/actionTypes';
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

export default function* () {
	yield all([takeEvery(FETCH_TESTS, workerFetchGetTests)]);
}
