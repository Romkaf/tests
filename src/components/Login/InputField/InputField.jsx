import React from 'react';
import styles from './InputField.module.scss';

const InputField = ({ type, id, label, error }) => {
	return (
		<div className="form-group position-relative">
			<label htmlFor={id}>{label}</label>
			<input type={type} className="form-control" id={id} required />
			{error && <span className={styles.error}>{error}</span>}
		</div>
	);
};

export default InputField;
