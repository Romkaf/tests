import React, { useState } from 'react';
import QuestionList from './QuestionList';
import Dropdown from './Dropdown';

const TestManagement = ({ test }) => {
	const [value, setValue] = useState(test?.title || '');
	const questions = [
		{ title: 'Сколько глаз у человека?', question_type: 'single', answer: 2 },
		{ title: 'Выберите русские города?', question_type: 'multiple', answer: 4 },
		{ title: 'Сколько будет 2+2', question_type: 'number', answer: 3 },
	];

	const handleInputChange = (evt) => {
		setValue(evt.target.value);
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
				<button className="btn btn-primary">Save</button>
			</div>
			<div>
				<h5>Questions:</h5>
				<QuestionList questions={questions} />
				<Dropdown />
			</div>
		</div>
	);
};

export default TestManagement;
