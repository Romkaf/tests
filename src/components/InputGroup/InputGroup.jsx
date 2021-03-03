import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './InputGroup.module.scss';
import classnames from 'classnames';
import { useHistory } from 'react-router-dom';
import { debounce } from '@utils/debounce';

const InputGroup = ({
	title,
	btnTitle1,
	btnTitle2,
	funcBtn1,
	funcBtn2,
	isAdmin,
	onChangeFilter,
	filter,
}) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const history = useHistory();
	const classInput = classnames('form-control', 'mr-2', 'shadow-sm', {
		'is-invalid': error,
	});

	const handleFilterChange = debounce(function (value) {
		onChangeFilter(value.trim());
		history.push(`/tests?search=${value.trim()}`);
	}, 250);

	const handleInputChange = (evt) => {
		title === 'Filter'
			? handleFilterChange(evt.target.value)
			: setValue(evt.target.value);
	};

	const handleBtnCreateClick = () => {
		if (!value) {
			setError(true);
		} else {
			setError(false);
			funcBtn2(value.trim(), history);
		}
	};

	const handleBtn2Click = () => {
		if (title === 'Filter') {
			funcBtn2();
		} else {
			handleBtnCreateClick();
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
					defaultValue={title === 'Filter' ? filter : undefined}
					value={title === 'Filter' ? undefined : value}
					onChange={handleInputChange}
					autoFocus={title === 'Test title' && true}
				/>
				{error && <div className={styles.error}>Required to fill</div>}
			</div>
			<div className="btn-group p-2">
				<button className="btn btn-secondary" onClick={funcBtn1}>
					{btnTitle1}
				</button>
				{isAdmin && (
					<button className="btn btn-primary" onClick={handleBtn2Click}>
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
	onChangeFilter: PropTypes.func,
};

export default InputGroup;
