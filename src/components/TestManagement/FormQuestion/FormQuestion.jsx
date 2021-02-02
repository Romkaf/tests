import React from 'react';

const FormQuestion = ({ questionType = 'single', question = null }) => {
	return (
		<form className="bg-white container">
			<div class="form-group">
				<h5>
					<label>Question:</label>
				</h5>
				<input type="text" className="form-control  rounded" />
			</div>
			<h5>Answers:</h5>
			<ul>{}</ul>
			<div class="input-group-prepend">
				<label className="align-self-end mr-2">1</label>
				<input type="text" className="form-control" />
				<div class="input-group-text">
					<input
						type="checkbox"
						aria-label="Checkbox for following text input"
					/>
				</div>
			</div>
		</form>
	);
};

export default FormQuestion;
