import React, { useState } from 'react';
import QuestionList from './QuestionList';
import Dropdown from './Dropdown';
import FormQuestion from './FormQuestion/FormQuestion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TestManagement = ({ test, onRequestAddTest }) => {
	const [value, setValue] = useState(test?.title || '');

	const questions = [
		{ title: 'Сколько глаз у человека?', question_type: 'single', answer: 2 },
		{ title: 'Выберите русские города?', question_type: 'multiple', answer: 4 },
		{ title: 'Сколько будет 2+2', question_type: 'number', answer: 3 },
	];

	const handleInputChange = (evt) => {
		setValue(evt.target.value);
	};

	const handleBtnCreate = () => {
		onRequestAddTest({ title: value });
	};

	const handleBtnSave = () => {
		// onRequestEditTest(test?.id);
	};

	return (
		<div>
			<h4 className="input-group align-items-baseline mb-3">
				<label>Test :</label>
				<input
					type="text"
					className="form-control ml-2 rounded"
					value={value}
					onChange={handleInputChange}
				/>
			</h4>
			<div className="btn-group mb-3">
				<button className="btn btn-secondary">Delete</button>
				{test ? (
					<button className="btn btn-primary" onClick={handleBtnSave}>
						Save
					</button>
				) : (
					<button className="btn btn-primary" onClick={handleBtnCreate}>
						Create
					</button>
				)}
			</div>
			<Link to="/" className="btn btn-primary mb-3 float-right">
				To home
			</Link>
			<div>
				<h5>Questions:</h5>
				<QuestionList questions={questions} />
				<Dropdown />
				<FormQuestion questionType={null} question={null} />
			</div>
		</div>
	);
};

TestManagement.propTypes = {
	test: PropTypes.object || null,
	onRequestAddTest: PropTypes.func,
};

export default TestManagement;
