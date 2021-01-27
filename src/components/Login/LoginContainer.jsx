import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { fetchRegistration, fetchSignin } from '@models/actions';

const LoginContainer = ({ fetchRegistration, fetchSignin }) => {
	return (
		<Login
			onFetchRegistration={fetchRegistration}
			onFetchSignin={fetchSignin}
		/>
	);
};

export default connect(null, { fetchRegistration, fetchSignin })(
	LoginContainer,
);
