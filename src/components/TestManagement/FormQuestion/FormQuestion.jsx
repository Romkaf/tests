import React, { useState } from 'react';
import FormAnswer from './FormAnswer/FormAnswer';
import classnames from 'classnames';
import { validate } from './validate';
import { QUESTION_FORM } from '@constants';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './FormQuestion.module.scss';
import PropTypes from 'prop-types';

const FormQuestion = ({
	onSetTypeQuestion,
	typeQuestion,
	question,
	onRequestCreateQuestion,
	onRequestUpdateQuestion,
	onRequestMoveAnswer,
}) => {
	const [errors, setErrors] = useState(null);
	const [value, setValue] = useState(question?.title || '');
	const [newAnswers, setNewAnswers] = useState(question?.answers || []);

	const { answerList, selected } = styles;

	const classInput = classnames('form-control', 'rounded', 'shadow-sm', {
		'is-invalid': errors?.question,
	});

	const getFormData = () => {
		const form = document.forms[QUESTION_FORM];
		if (!form['input']) {
			return {
				title: value,
				question_type: typeQuestion,
			};
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

		const answers = inputsValues.map((it, idx) => ({
			...it,
			is_right: checkboxValues[idx],
		}));

		return {
			title: value,
			answers,
			question_type: typeQuestion,
		};
	};

	const updateQuestion = (data) => {
		const { title, answers, question_type } = data;
		const checkedAnswers = checkAnswers(answers, question.answers);
		const updatingQuestion = {
			title,
			question_type,
			answer: answers.length,
		};
		onRequestUpdateQuestion({
			updatingQuestion,
			checkedAnswers,
			quetionId: question.id,
		});
	};

	const checkAnswers = (currentAnswers, oldAnswers) => {
		const patchAnswers = currentAnswers.filter((it) =>
			oldAnswers.some((el) => el.id === +it.id),
		);

		const postAnswers = currentAnswers.filter(
			(it) => !oldAnswers.some((el) => el.id === +it.id),
		);

		return { patchAnswers, postAnswers };
	};

	const validateData = (data) => {
		const errors = validate(data);
		setErrors(errors);
		return errors;
	};

	const handleSaveClick = () => {
		const data = getFormData();
		const errors = validateData(data);

		if (Object.keys(errors).length === 0) {
			if (question) {
				updateQuestion(data);
			} else {
				onRequestCreateQuestion(data);
			}
			onSetTypeQuestion('');
		}
	};

	const handleCanselClick = () => onSetTypeQuestion('');

	const handleAnswerAdd = () => {
		const answer = { text: '', is_right: false, id: newAnswers.length };
		setNewAnswers((state) => [...state, answer]);
	};

	const handleInputChange = (evt) => setValue(evt.target.value);

	const reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	const handleDragEnd = (result) => {
		if (!result.destination) {
			return;
		}

		const items = reorder(
			newAnswers,
			result.source.index,
			result.destination.index,
		);

		onRequestMoveAnswer(result.draggableId, result.destination.index);

		setNewAnswers(items);
	};

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
					value={value}
					aria-label="Field for the question"
					onChange={handleInputChange}
					autoFocus
				/>
				{errors?.question && (
					<div className="invalid-feedback">{errors.question}</div>
				)}
			</div>
			<h5>Answers:</h5>
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<ul
							className={answerList}
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{newAnswers.map((it, idx) => (
								<Draggable key={it.id} draggableId={String(it.id)} index={idx}>
									{(provided, snapshot) => (
										<li
											className={`p-1 ${snapshot.isDragging && selected}`}
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
										>
											<FormAnswer
												answer={it}
												typeQuestion={typeQuestion}
												error={errors?.answersInputs}
											/>
										</li>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
			{!(typeQuestion === 'number' && newAnswers.length >= 1) && (
				<button
					className="btn btn-primary float-right"
					type="button"
					title="Add answer"
					onClick={handleAnswerAdd}
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
	onRequestUpdateQuestion: PropTypes.func,
	onRequestMoveAnswer: PropTypes.func,
};

export default FormQuestion;
