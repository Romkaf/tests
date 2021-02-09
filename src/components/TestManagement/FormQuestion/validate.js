import { ERROR_TEXTS } from '@constants';

const { REQUIRED, INDICATE_ANSWER, ONE_ANSWER, TWO_ANSWER } = ERROR_TEXTS;

export const validate = (fields) => {
	const errors = {};
	if (!fields.question) {
		errors.question = REQUIRED;
	}

	if (fields.answers) {
		if (!fields.answers.checkboxes.filter((it) => it === true).length) {
			errors.answersGeneral = INDICATE_ANSWER;
		}

		if (fields.type === 'single') {
			if (fields.answers.checkboxes.filter((it) => it === true).length > 1) {
				errors.answersGeneral = ONE_ANSWER;
			}
		}

		fields.answers.inputs.forEach((it, idx) => {
			if (!it[idx]) {
				errors.answersInputs = {
					...errors.answersInputs,
					[Object.keys(it)[0]]: REQUIRED,
				};
			}
		});

		if (!fields.answers.inputs.length < 2) {
			errors.answersGeneral = TWO_ANSWER;
		}
	}

	if (fields.answers === null) {
		errors.answersGeneral = TWO_ANSWER;
	}

	if (Object.keys(errors).length === 0) {
		return null;
	}

	return errors;
};
