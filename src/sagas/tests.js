import { takeEvery, all, call, put, delay } from 'redux-saga/effects';
import {
	fetchGetTests,
	fetchCreateTest,
	fetchDeleteTest,
	fetchCreateQuestion,
	fetchCreateAnswer,
} from '@api';
import {
	fetchTestsSuccess,
	addTest,
	addSortTests,
	deleteTest,
	addQuestion,
} from '@models/actions';
import {
	FETCH_TESTS,
	REQUEST_ADD_TEST,
	SORT_TESTS,
	REQUEST_DELETE_TEST,
	REQUEST_CREATE_QUESTION,
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

function* workerFetchDeleteTest({ payload }) {
	try {
		const { data } = yield fetchDeleteTest(payload);
		yield console.log(data);
		yield put(deleteTest(payload));
	} catch (error) {
		yield showAndHideError('Не удалось удалить тест на сервере', error);
	}
}

function* createQuestion(id, question) {
	const { title, answers, question_type } = question;
	const postedQuestion = {
		title,
		question_type,
		answer: answers.length,
	};
	const { data } = yield fetchCreateQuestion(id, postedQuestion);
	return data;
}

function* createAnswers(id, answers) {
	const answersData = answers.map((it) => ({
		text: it.text,
		is_right: it.is_right,
	}));

	const answersArray = yield all(
		answersData.map(function* (it) {
			const { data } = yield fetchCreateAnswer(id, it);
			return data;
		}),
	);

	return answersArray;
}

function* workerFetchPostQuestionAndAnswers({ payload }) {
	try {
		const { testId, data } = payload;

		const receivedQuestion = yield createQuestion(testId, data);

		const receivedAnswers = yield createAnswers(
			receivedQuestion.id,
			data.answers,
		);

		yield put(
			addQuestion(testId, { ...receivedQuestion, answers: receivedAnswers }),
		);
	} catch (error) {
		yield showAndHideError('Не удалось загрузить данные на сервер', error);
	}
}

export default function* () {
	yield all([
		takeEvery(FETCH_TESTS, workerFetchGetTests),
		takeEvery(REQUEST_ADD_TEST, workerFetchPostTest),
		takeEvery(SORT_TESTS, workerFetchGetSortTest),
		takeEvery(REQUEST_DELETE_TEST, workerFetchDeleteTest),
		takeEvery(REQUEST_CREATE_QUESTION, workerFetchPostQuestionAndAnswers),
	]);
}
