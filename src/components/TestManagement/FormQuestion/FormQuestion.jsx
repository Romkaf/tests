import React, { useState } from 'react';
import FormAnswer from './FormAnswer/FormAnswer';

const FormQuestion = ({ questionType = 'single', question = null }) => {
	const [value, setValue] = useState(question?.title || '');
	const answers = [
		{ text: 'Text1', is_right: false, id: 1 },
		{ text: 'Text2', is_right: true, id: 2 },
		{ text: 'Text3', is_right: false, id: 3 },
	];

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
				{answers.map((it) => (
					<li className="p-1" key={it.id}>
						<FormAnswer answer={it} questionType={questionType} />
					</li>
				))}
			</ol>
			<div className="btn-group">
				<button className="btn btn-secondary">Cansel</button>
				<button className="btn btn-primary">Save</button>
			</div>
		</form>
	);
};

export default FormQuestion;
