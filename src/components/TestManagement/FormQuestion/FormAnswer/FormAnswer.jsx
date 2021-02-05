import React, { useState } from 'react';

const FormAnswer = ({ answer, questionType }) => {
	const [value, setValue] = useState(answer?.text || '');
	const [isRight, setIsRight] = useState(answer?.is_right || false);

	const handleInputChange = (evt) => setValue(evt.target.value);
	const handleCheckboxChange = () => setIsRight((state) => !state);

	return (
		<div className="input-group-prepend shadow-sm">
			{/* <span className="align-self-center mr-2">1</span> */}
			<input
				type="text"
				className="form-control"
				value={value}
				onChange={handleInputChange}
			/>
			<div className="input-group-text">
				<input
					type="checkbox"
					aria-label="Checkbox for right answer"
					checked={isRight}
					onChange={handleCheckboxChange}
				/>
			</div>
		</div>
	);
};

export default FormAnswer;
