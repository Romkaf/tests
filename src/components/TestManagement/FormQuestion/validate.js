import { ERROR_TEXTS } from '@constants';

const {
	REQUIRED,
	INDICATE_ANSWER,
	ONE_ANSWER,
	TWO_ANSWER,
	ONE_RIGHT_ANSWER,
} = ERROR_TEXTS;

export const validate = (fields) => {
	const errors = {};
	if (!fields.question_type) {
		errors.question = REQUIRED;
	}

	if (fields.type !== 'number') {
		if (fields.answers) {
			if (fields.type === 'single') {
				if (fields.answers.filter((it) => it.is_right === true).length > 1) {
					errors.answersGeneral = ONE_RIGHT_ANSWER;
				}
			}

			if (!fields.answers.filter((it) => it.is_right === true).length) {
				errors.answersGeneral = INDICATE_ANSWER;
			}

			if (fields.answers.length < 2) {
				errors.answersGeneral = TWO_ANSWER;
			}

			fields.answers.forEach((it) => {
				if (!it.text) {
					errors.answersInputs = {
						...errors.answersInputs,
						[it.id]: REQUIRED,
					};
				}
			});
		} else {
			errors.answersGeneral = TWO_ANSWER;
		}
	}

	if (fields.type === 'number') {
		if (fields.answers) {
			fields.answers.forEach((it) => {
				if (!it.text) {
					errors.answersInputs = {
						...errors.answersInputs,
						[it.id]: REQUIRED,
					};
				}
			});
		} else {
			errors.answersGeneral = ONE_RIGHT_ANSWER;
		}
	}

	return errors;
};
