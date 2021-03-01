import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '@models/actions';
import Modal from './Modal';
import PropTypes from 'prop-types';

const ModalContainer = ({ modal, hideModal }) => {
	if (!modal) {
		return false;
	}

	return (
		<Modal
			text={modal.text}
			onModalConfirm={modal.func}
			onModalHide={hideModal}
			singleBtnText={modal.singleBtnText}
		/>
	);
};

ModalContainer.propTypes = {
	modal: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	hideModal: PropTypes.func,
};

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { hideModal })(ModalContainer);
