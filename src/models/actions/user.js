import {
	FETCH_REGISTRATION,
	FETCH_SIGNIN,
	FETCH_SIGNIN_SUCCESS,
	SIGNOUT,
} from './actionTypes';

export const fetchRegistration = (data) => {
	return {
		type: FETCH_REGISTRATION,
		payload: data,
	};
};

export const fetchSignin = (data) => {
	return {
		type: FETCH_SIGNIN,
		payload: data,
	};
};

export const fetchSigninSuccess = (data) => {
	return {
		type: FETCH_SIGNIN_SUCCESS,
		payload: data,
	};
};

export const signOut = () => {
	return {
		type: SIGNOUT,
	};
};
