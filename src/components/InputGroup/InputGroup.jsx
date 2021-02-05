import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputGroup.module.scss';
import classnames from 'classnames';

const InputGroup = ({
	title,
	btnTitle1,
	btnTitle2,
	funcBtn1,
	funcBtn2,
	isAdmin = true,
}) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const classInput = classnames('form-control', 'mr-2', 'shadow-sm', {
		'is-invalid': error,
	});

	const handleInputChange = (evt) => setValue(evt.target.value);
	const handleBtn1Click = () => {
		title === 'Filter' ? console.log('CLICK on Sort by date') : funcBtn1();
	};
	const handleBtn2Click = () => {
		if (title === 'Filter') {
			funcBtn2();
		} else {
			if (!value) {
				setError(true);
				return;
			} else {
				setError(false);
				funcBtn2({ title: value });
			}
		}
	};

	return (
		<div className="mb-2">
			<div className="input-group input-group mb-1">
				<div className="input-group-prepend">
					<label htmlFor={title} className="btn font-weight-bold">
						{title}
					</label>
				</div>
				<input
					id={title}
					type="text"
					className={classInput}
					value={value}
					onChange={handleInputChange}
				/>
				{error && <div className={styles.error}>Required to fill</div>}
			</div>
			<div className="btn-group p-2">
				<button className="btn btn-sm btn-secondary" onClick={handleBtn1Click}>
					{btnTitle1}
				</button>
				{isAdmin && (
					<button className="btn btn-sm btn-primary" onClick={handleBtn2Click}>
						{btnTitle2}
					</button>
				)}
			</div>
		</div>
	);
};

InputGroup.propTypes = {
	title: PropTypes.string,
	btnTitle1: PropTypes.string,
	btnTitle2: PropTypes.string,
	funcBtn1: PropTypes.func,
	funcBtn2: PropTypes.func,
	isAdmin: PropTypes.bool,
};

export default InputGroup;
