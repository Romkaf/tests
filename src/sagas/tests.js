import { takeEvery, all, put } from 'redux-saga/effects';
import {
	fetchGetTests,
	fetchCreateTest,
	fetchDeleteTest,
	fetchEditTest,
} from '@api';
import {
	fetchTestsSuccess,
	addTest,
	deleteTest,
	editTest,
} from '@models/actions';
import {
	FETCH_TESTS,
	REQUEST_ADD_TEST,
	REQUEST_DELETE_TEST,
	REQUEST_EDIT_TEST,
} from '@models/actions/actionTypes';
import { showAndHideError } from './error';

function* workerFetchGetTests({ payload }) {
	try {
		const { currentPage, sortType } = payload;
		const { data } = yield fetchGetTests(
			`?page=${currentPage}&per=8&sort=${sortType}`,
		);
		yield put(fetchTestsSuccess(data));
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

function* workerFetchDeleteTest({ payload }) {
	try {
		const { id, history } = payload;
		yield fetchDeleteTest(id);
		yield put(deleteTest(payload));
		yield history.push('/tests');
	} catch (error) {
		yield showAndHideError('Не удалось удалить тест на сервере', error);
	}
}

function* workerFetchEditTest({ payload }) {
	try {
		const { id, value, history } = payload;
		yield fetchEditTest(id, { title: value });
		yield put(editTest(payload));
		yield history.push('/tests');
	} catch (error) {
		yield showAndHideError('Не удалось внести изменения на сервере', error);
	}
}

export default function* () {
	yield all([
		takeEvery(FETCH_TESTS, workerFetchGetTests),
		takeEvery(REQUEST_ADD_TEST, workerFetchPostTest),
		takeEvery(REQUEST_DELETE_TEST, workerFetchDeleteTest),
		takeEvery(REQUEST_EDIT_TEST, workerFetchEditTest),
	]);
}
