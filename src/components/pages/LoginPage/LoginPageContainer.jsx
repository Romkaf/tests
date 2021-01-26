import React from 'react';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { fetchRegistration, fetchSignin } from '@models/actions';

const LoginPageContainer = ({ fetchRegistration, fetchSignin }) => {
	return (
		<LoginPage
			onFetchRegistration={fetchRegistration}
			onFetchSignin={fetchSignin}
		/>
	);
};

export default connect(null, { fetchRegistration, fetchSignin })(
	LoginPageContainer,
);
