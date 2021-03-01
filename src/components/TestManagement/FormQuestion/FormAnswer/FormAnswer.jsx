import React, { useState } from 'react';
import styles from './FormAnswer.module.scss';
import classnames from 'classnames';
import { MODAL_MESSAGES } from '@constants';
import PropTypes from 'prop-types';

const FormAnswer = ({
	answer,
	typeQuestion,
	error = null,
	onModalShow,
	onAnswerDelete,
}) => {
	const keyId =
		error && Object.keys(error).find((it) => it === String(answer.id));

	const [value, setValue] = useState(answer?.text || '');
	const [isRight, setIsRight] = useState(answer.is_right || false);

	const classInput = classnames('form-control', {
		'is-invalid': keyId === String(answer.id),
	});

	const wrapperAnswerDelete = () => onAnswerDelete(answer.id);
	const handleInputChange = (evt) => setValue(evt.target.value);
	const handleCheckboxChange = () => setIsRight((state) => !state);
	const handleDeleteClick = () =>
		onModalShow(MODAL_MESSAGES.DELETE_ANSWER, wrapperAnswerDelete);

	return (
		<>
			<div className="input-group-prepend shadow-sm">
				<input
					type={typeQuestion === 'number' ? 'number' : 'text'}
					name="input"
					className={classInput}
					value={value}
					data-id={answer.id}
					aria-label="Field for an answer"
					onChange={handleInputChange}
					required
				/>
				<div
					className="input-group-text"
					hidden={typeQuestion === 'number' && true}
				>
					<input
						type="checkbox"
						name="checkbox"
						aria-label="Checkbox for right answer"
						checked={typeQuestion === 'number' ? true : isRight}
						onChange={handleCheckboxChange}
					/>
				</div>
				{typeQuestion !== 'number' && (
					<button
						title="Delete answer"
						type="button"
						className={styles.btn}
						onClick={handleDeleteClick}
					>
						&#65794;
					</button>
				)}
			</div>
			{keyId === String(answer.id) && (
				<div className="invalid-feedback d-block">{error[keyId]}</div>
			)}
		</>
	);
};

FormAnswer.propTypes = {
	answer: PropTypes.object,
	error: PropTypes.object || null,
	typeQuestion: PropTypes.string,
	onAnswerDelete: PropTypes.func,
	onModalShow: PropTypes.func,
};

export default FormAnswer;
