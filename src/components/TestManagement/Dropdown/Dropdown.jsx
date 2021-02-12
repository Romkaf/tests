import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';

const Dropdown = ({ onSetTypeQuestion, typeQuestion }) => {
	useEffect(
		() => !typeQuestion && dropBtn.current.classList.remove(`${disabled}`),
		[typeQuestion],
	);

	const { dropdown, show, disabled } = styles;
	const dropElem = useRef();
	const dropBtn = useRef();

	const setDisabled = () => dropBtn.current.classList.add(`${disabled}`);

	const handleTypeBtnClick = (evt) => {
		onSetTypeQuestion(evt.target.textContent);
		setDisabled();
	};

	const handleDropBtnClick = (evt) => {
		dropElem.current.classList.toggle(`${show}`);
		dropElem.current.focus();
	};

	return (
		<div className="position-relative d-inline-block mb-3 mt-1">
			<button
				className="btn btn-primary"
				ref={dropBtn}
				onClick={handleDropBtnClick}
			>
				Add question
				<i className="bi bi-caret-down-fill ml-3"></i>
			</button>
			<div
				id="myDropdown"
				className={dropdown}
				ref={dropElem}
				tabIndex="-1"
				onClick={handleDropBtnClick}
			>
				<button
					className="typeSelect btn btn-block btn-light"
					onClick={handleTypeBtnClick}
				>
					single
				</button>
				<button
					className="typeSelect btn btn-block btn-light mt-0"
					onClick={handleTypeBtnClick}
				>
					multiplay
				</button>
				<button
					className="typeSelect btn btn-block btn-light mt-0"
					onClick={handleTypeBtnClick}
				>
					number
				</button>
			</div>
		</div>
	);
};

Dropdown.propTypes = {
	onSetTypeQuestion: PropTypes.func,
};

export default Dropdown;
