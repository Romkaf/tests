import { ERROR_TEXTS } from '@constants';

const {
	REQUIRED,
	MIN_NAME_LENGTH,
	MIN_PASSWORD_LENGTH,
	NOT_MATCH,
} = ERROR_TEXTS;

const validator = {
	isMinLength: (value, min) => String(value).length > min,
};

export const validate = (fields) => {
	const errors = {};
	if (!validator.isMinLength(fields.username, 1)) {
		errors.username = MIN_NAME_LENGTH;
	}

	if (!fields.username) {
		errors.username = REQUIRED;
	}

	if (!validator.isMinLength(fields.password, 5)) {
		errors.password = MIN_PASSWORD_LENGTH;
	}

	if (!fields.password) {
		errors.password = REQUIRED;
	}

	if (fields?.password_confirmation !== fields.password) {
		errors.password_confirmation = NOT_MATCH;
	}

	if (!fields.password_confirmation) {
		errors.password_confirmation = REQUIRED;
	}

	return errors;
};
