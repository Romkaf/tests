import { takeEvery, all, put } from 'redux-saga/effects';
import {
	fetchCreateQuestion,
	fetchCreateAnswer,
	fetchUpdateQuestion,
	fetchUpdateAnswer,
	fetchDeleteQuestion,
	fetchMoveAnswer,
	fetchDeleteAnswer,
} from '@api';
import { addQuestion, updateQuestion, deleteQuestion } from '@models/actions';
import {
	REQUEST_CREATE_QUESTION,
	REQUEST_UPDATE_QUESTION,
	REQUEST_DELETE_QUESTION,
	REQUEST_MOVE_ANSWER,
} from '@models/actions/actionTypes';
import { showAndHideError } from './error';

function* getCreatedQuestion(id, question) {
	const { title, answers, question_type } = question;
	const postedQuestion = {
		title,
		question_type,
		answer: answers.length,
	};
	const { data } = yield fetchCreateQuestion(id, postedQuestion);
	return data;
}

function* getFetchedAnswers(array, func, id) {
	return yield all(
		array.map(function* (it) {
			const { data } = yield func(id || it.id, it);
			return data;
		}),
	);
}

function* workerFetchPostQuestionAndAnswers({ payload }) {
	try {
		const { testId, data } = payload;

		const receivedQuestion = yield getCreatedQuestion(testId, data);

		const receivedAnswers = yield getFetchedAnswers(
			data.answers,
			fetchCreateAnswer,
			receivedQuestion.id,
		);

		yield put(
			addQuestion(testId, { ...receivedQuestion, answers: receivedAnswers }),
		);
	} catch (error) {
		yield showAndHideError('Не удалось загрузить данные на сервер', error);
	}
}

function* workerFetchPatchQuestionAndAnswers({ payload }) {
	try {
		const {
			testId,
			data: { updatingQuestion, checkedAnswers, quetionId },
		} = payload;

		const { patchAnswers, postAnswers, deleteAnswers } = checkedAnswers;

		const { data: receivedQuestion } = yield fetchUpdateQuestion(
			quetionId,
			updatingQuestion,
		);

		let updatedAnswers = [],
			createdAnswers = [];

		if (patchAnswers.length) {
			updatedAnswers = yield getFetchedAnswers(patchAnswers, fetchUpdateAnswer);
		}

		if (postAnswers.length) {
			createdAnswers = yield getFetchedAnswers(
				postAnswers,
				fetchCreateAnswer,
				quetionId,
			);
		}

		if (deleteAnswers.length) {
			yield getFetchedAnswers(deleteAnswers, fetchDeleteAnswer);
		}

		yield put(
			updateQuestion(testId, {
				...receivedQuestion,
				answers: updatedAnswers.concat(createdAnswers),
			}),
		);
	} catch (error) {
		yield showAndHideError('Не удалось обновить данные на сервере', error);
	}
}

function* workerFetchDeleteQuestion({ payload }) {
	try {
		const { testId, questionId } = payload;
		yield fetchDeleteQuestion(questionId);
		yield put(deleteQuestion(testId, questionId));
	} catch (error) {
		yield showAndHideError('Не удалось удалить вопрос', error);
	}
}

function* workerFetchMoveAnswer({ payload }) {
	try {
		const { id, position } = payload;
		yield fetchMoveAnswer(id, position);
	} catch (error) {
		yield showAndHideError(
			'Не удалось изменить позицию ответа на сервере',
			error,
		);
	}
}

export default function* () {
	yield all([
		takeEvery(REQUEST_CREATE_QUESTION, workerFetchPostQuestionAndAnswers),
		takeEvery(REQUEST_UPDATE_QUESTION, workerFetchPatchQuestionAndAnswers),
		takeEvery(REQUEST_DELETE_QUESTION, workerFetchDeleteQuestion),
		takeEvery(REQUEST_MOVE_ANSWER, workerFetchMoveAnswer),
	]);
}
