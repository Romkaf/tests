import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import {
	fetchRegistration,
	fetchSignin,
	toggleRegistration,
} from '@models/actions';

const LoginContainer = ({
	fetchRegistration,
	fetchSignin,
	toggleRegistration,
	isRegistrated,
}) => {
	return (
		<Login
			onFetchRegistration={fetchRegistration}
			onFetchSignin={fetchSignin}
			onToggleRegistration={toggleRegistration}
			isRegistrated={isRegistrated}
		/>
	);
};

const actions = {
	fetchRegistration,
	fetchSignin,
	toggleRegistration,
};

const mapStateToProps = ({ registration }) => ({ isRegistrated: registration });

export default connect(mapStateToProps, actions)(LoginContainer);
