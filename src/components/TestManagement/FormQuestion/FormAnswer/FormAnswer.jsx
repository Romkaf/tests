import React, { useState } from 'react';
import styles from './FormAnswer.module.scss';

const FormAnswer = ({ answer, questionType }) => {
	const [value, setValue] = useState(answer?.text || '');
	const [isRight, setIsRight] = useState(answer?.is_right || false);

	const handleInputChange = (evt) => setValue(evt.target.value);
	const handleCheckboxChange = () => setIsRight((state) => !state);

	return (
		<div className="input-group-prepend shadow-sm">
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

			<button title="Delete answer" className={styles.btn}>
				&#65794;
			</button>
		</div>
	);
};

export default FormAnswer;
