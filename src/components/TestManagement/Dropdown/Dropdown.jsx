import React, { useRef } from 'react';
import styles from './Dropdown.module.scss';

const Dropdown = () => {
	const { dropdown, show } = styles;
	const dropElem = useRef();

	const handleDropBtnClick = (evt) => {
		dropElem.current.classList.toggle(`${show}`);
	};

	return (
		<div className="position-relative d-inline-block p-2 pl-3">
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
				<button className="typeSelect btn btn-block btn-light">single</button>
				<button className="typeSelect btn btn-block btn-light mt-0">
					multiplay
				</button>
				<button className="typeSelect btn btn-block btn-light mt-0">
					number
				</button>
			</div>
		</div>
	);
};

export default Dropdown;
