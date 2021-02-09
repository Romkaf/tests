import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';

const Dropdown = ({ onSetTypeQuestion }) => {
	const { dropdown, show } = styles;
	const dropElem = useRef();

	const handleTypeBtnClick = (evt) => {
		onSetTypeQuestion(evt.target.textContent);
	};

	const handleDropBtnClick = (evt) => {
		dropElem.current.classList.toggle(`${show}`);
	};

	return (
		<div className="position-relative d-inline-block mb-3 mt-1">
			<button onClick={handleDropBtnClick} className="btn btn-primary">
				Add question
				<i className="bi bi-caret-down-fill ml-3"></i>
			</button>
			<div
				id="myDropdown"
				className={dropdown}
				ref={dropElem}
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
