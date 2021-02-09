import React, { useState } from 'react';
import FormAnswer from './FormAnswer/FormAnswer';
import PropTypes from 'prop-types';

const FormQuestion = ({
	onSetTypeQuestion,
	questionType = 'single',
	question = null,
}) => {
	const [value, setValue] = useState(question?.title || '');
	const [newAnswers, setNewAnswers] = useState(question?.answers || []);

	// const answers = [
	// 	{ text: 'Text1', is_right: false, id: 1 },
	// 	{ text: 'Text2', is_right: false, id: 2 },
	// 	{ text: 'Text3', is_right: false, id: 3 },
	// ];

	const handleAnswerCreate = () => {
		const answer = { text: '', is_right: false, id: newAnswers.length };
		setNewAnswers((state) => [...state, answer]);
	};

	const handleCanselClick = () => onSetTypeQuestion('');

	const handleInputChange = (evt) => setValue(evt.target.value);

	return (
		<form className="bg-white container pt-2 pb-3 rounded-lg shadow">
			<div className="form-group">
				<h5>
					<label>Question:</label>
				</h5>
				<input
					type="text"
					className="form-control rounded shadow-sm"
					onChange={handleInputChange}
				/>
			</div>
			<h5>Answers:</h5>
			<ol className="pl-3">
				{newAnswers.map((it) => (
					<li className="p-1" key={it.id}>
						<FormAnswer answer={it} questionType={questionType} />
					</li>
				))}
			</ol>
			<button
				className="btn btn-primary float-right"
				type="button"
				title="Add answer"
				onClick={handleAnswerCreate}
			>
				<i className="bi bi-plus-circle" />
			</button>
			<div className="btn-group">
				<button
					className="btn btn-secondary"
					type="button"
					onClick={handleCanselClick}
				>
					Cansel
				</button>
				<button className="btn btn-primary" type="button">
					Save
				</button>
			</div>
		</form>
	);
};

FormQuestion.propTypes = {
	question: PropTypes.object || null,
	questionType: PropTypes.string,
	onSetTypeQuestion: PropTypes.func,
};

export default FormQuestion;
