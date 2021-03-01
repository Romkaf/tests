import React, { useEffect, useRef } from 'react';
import { keyCodeEsc } from '@constants';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const Modal = ({ text, onModalConfirm, onModalHide, singleBtnText }) => {
	useEffect(() => {
		modal.current.focus();
		document.body.classList.add(styles.lock);
		return () => document.body.classList.remove(styles.lock);
	});

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
						{!singleBtnText && (
							<button
								type="button"
								className="btn btn-secondary"
								onClick={handleModalCansel}
							>
								Cansel
							</button>
						)}
						<button
							type="button"
							className="btn btn-primary"
							onClick={handleModalConfirm}
						>
							{singleBtnText ? `${singleBtnText}` : 'Confirm'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	text: PropTypes.string,
	onModalConfirm: PropTypes.func,
	onModalHide: PropTypes.func,
	singleBtnText: PropTypes.string,
};

export default Modal;
