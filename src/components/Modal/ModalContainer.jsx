import React from 'react';
import { connect } from 'react-redux';
import { showModal, hideModal } from '@models/actions';
import Modal from './Modal';

const ModalContainer = ({ modal, hideModal }) => {
	if (!modal.isShow) {
		return false;
	}

	return (
		<Modal
			text={modal.text}
			onModalConfirm={modal.func}
			onModalHide={hideModal}
		/>
	);
};

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { hideModal })(ModalContainer);
