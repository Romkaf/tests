import React, { useState } from 'react';
import FormAnswer from './FormAnswer/FormAnswer';
import classnames from 'classnames';
import { validate } from './validate';
import { QUESTION_FORM } from '@constants';
import PropTypes from 'prop-types';

const FormQuestion = ({
	onSetTypeQuestion,
	typeQuestion,
	question,
	onRequestCreateQuestion,
}) => {
	const [errors, setErrors] = useState(null);
	const [value, setValue] = useState(question?.title || '');
	const [newAnswers, setNewAnswers] = useState(question?.answers || []);

	const classInput = classnames('form-control', 'rounded', 'shadow-sm', {
		'is-invalid': errors?.question,
	});

	const getAnswersData = () => {
		const form = document.forms[QUESTION_FORM];
		if (!form['input']) {
			return null;
		}

		const inputsValues = form['input'].length
			? Array.from(form['input']).map((it) => ({
					id: it.dataset.id,
					text: it.value,
			  }))
			: [{ id: form['input'].dataset.id, text: form['input'].value }];

		const checkboxValues = form['checkbox']?.length
			? Array.from(form['checkbox']).map((it) => it.checked)
			: [form['checkbox']?.checked];

		return inputsValues.map((it, idx) => ({
			...it,
			is_right: checkboxValues[idx],
		}));
	};

	const handleSaveClick = () => {
		const data = {
			title: value,
			answers: getAnswersData(),
			question_type: typeQuestion,
		};
		const errors = validate(data);
		setErrors(errors);

		if (Object.keys(errors).length === 0) {
			onRequestCreateQuestion(data);
			onSetTypeQuestion('');
		}
	};

	const handleCanselClick = () => onSetTypeQuestion('');

	const handleAnswerCreate = () => {
		const answer = { text: '', is_right: false, id: newAnswers.length };
		setNewAnswers((state) => [...state, answer]);
	};

	const handleInputChange = (evt) => setValue(evt.target.value);

	return (
		<form
			className="bg-white container pt-2 pb-3 rounded-lg shadow"
			name={QUESTION_FORM}
		>
			<div className="form-group">
				<h5 className="d-inline-block">
					<label>Question:</label>
				</h5>
				<span className="float-right">Type:{typeQuestion}</span>
				<input
					type="text"
					className={classInput}
					aria-label="Field for the question"
					onChange={handleInputChange}
					autoFocus
				/>
				{errors?.question && (
					<div className="invalid-feedback">{errors.question}</div>
				)}
			</div>
			<h5>Answers:</h5>
			<ol className="pl-3">
				{newAnswers.map((it) => (
					<li className="p-1" key={it.id}>
						<FormAnswer
							answer={it}
							typeQuestion={typeQuestion}
							error={errors?.answersInputs}
						/>
					</li>
				))}
			</ol>
			{!(typeQuestion === 'number' && newAnswers.length >= 1) && (
				<button
					className="btn btn-primary float-right"
					type="button"
					title="Add answer"
					onClick={handleAnswerCreate}
				>
					<i className="bi bi-plus-circle" />
				</button>
			)}
			<div className="btn-group">
				<button
					className="btn btn-secondary"
					type="button"
					onClick={handleCanselClick}
				>
					Cansel
				</button>
				<button
					className="btn btn-primary"
					type="button"
					onClick={handleSaveClick}
				>
					Save
				</button>
			</div>
			{errors?.answersGeneral && (
				<div className="invalid-feedback d-block">{errors.answersGeneral}</div>
			)}
		</form>
	);
};

FormQuestion.propTypes = {
	question: PropTypes.object || null,
	typeQuestion: PropTypes.string,
	onSetTypeQuestion: PropTypes.func,
	onRequestCreateQuestion: PropTypes.func,
};

export default FormQuestion;
