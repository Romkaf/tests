import React, { useEffect, useRef } from 'react';
import { keyCodeEsc } from '@constants';
import styles from './Modal.module.scss';

const Modale = ({ text, onModalConfirm, onModalHide }) => {
	useEffect(() => modal.current.focus());
	const modal = useRef();

	const handleModalConfirm = () => {
		onModalConfirm();
		onModalHide();
	};

	const handleModalCansel = () => {
		onModalHide();
	};

	const handleModalClick = (evt) => {
		evt.target.classList.contains('modal') && onModalHide();
	};

	const handleModalKeyDown = (evt) => {
		evt.keyCode === keyCodeEsc && onModalHide();
	};

	return (
		<div
			className={`modal ${styles.root}`}
			tabIndex="-1"
			ref={modal}
			onClick={handleModalClick}
			onKeyDown={handleModalKeyDown}
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="container">
						<button
							type="button"
							className="close mt-2"
							aria-label="Close"
							onClick={handleModalCansel}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<p>{text}</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={handleModalCansel}
						>
							Cansel
						</button>
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleModalConfirm}
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modale;
