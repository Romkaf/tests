import React from 'react';
import styles from './Modal.module.scss';

const Module = ({
	modal,
	modalText = 'Modal body text goes here.',
	onModalConfirm,
}) => {
	const handleModalConfirm = () => {
		onModalConfirm();
		modal.current.style.display = 'none';
	};

	const handleModalCansel = () => {
		modal.current.style.display = 'none';
	};

	return (
		<div
			className={`modal ${styles.root}`}
			tabIndex="-1"
			ref={modal}
			onClick={handleModalConfirm}
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
						<p>{modalText}</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={handleModalCansel}
						>
							Cansel
						</button>
						<button type="button" className="btn btn-primary">
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Module;
