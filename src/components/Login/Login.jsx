import React, { useState } from 'react';
import { LOGIN_FORM, INPUTS_ID } from '@constants';
import InputField from './InputField';
import styles from './Login.module.scss';
import Button from './Button/Button';
import { validate } from './validate';

const Login = ({ onFetchRegistration, onFetchSignin }) => {
	const [isRegist, setIsRegist] = useState(true);
	const [errors, setErrors] = useState({});
	const { userName, password, passwordConfirmation, admin } = INPUTS_ID;

	const handleBtnClick = (evt) => {
		setIsRegist((state) => !state);
		setErrors({});
		evt.target.blur();
	};

	const getDataForm = () => {
		const form = document.forms[LOGIN_FORM];

		const newData = {
			username: form[userName].value,
			password: form[password].value,
			password_confirmation: form[passwordConfirmation]?.value,
			is_admin: form[admin]?.checked,
		};

		return newData;
	};

	const validateData = (data, func) => {
		const formErrors = validate(data);
		setErrors(formErrors);
		console.log(data);
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0) {
			func(data);
		}
	};

	const handleLoginClick = () => {
		const data = getDataForm();
		validateData(data, onFetchSignin);
	};

	const handleRegistrationClick = (evt) => {
		const data = getDataForm();
		validateData(data, onFetchRegistration);
	};

	return (
		<form className={styles.root} name={LOGIN_FORM}>
			<InputField
				type="text"
				id={userName}
				label="Login"
				error={errors?.username}
			/>

			<InputField
				type="password"
				id={password}
				label="Password"
				error={errors?.password}
			/>

			{!isRegist && (
				<InputField
					type="password"
					id={passwordConfirmation}
					label="Confirm password"
					error={errors?.password_confirmation}
				/>
			)}
			{isRegist ? (
				<>
					<Button label="Log In" func={handleLoginClick} color="primary" />
					<Button
						label="I don't have an account"
						func={handleBtnClick}
						color="secondary"
					/>
				</>
			) : (
				<>
					<div className="mb-3 form-check">
						<input type="checkbox" className="form-check-input" id={admin} />
						<label htmlFor={admin} className="form-check-label">
							Are you an admin?
						</label>
					</div>

					<Button
						label="Registration"
						func={handleRegistrationClick}
						color="primary"
					/>

					<Button
						label="I have an account"
						func={handleBtnClick}
						color="secondary"
					/>
				</>
			)}
		</form>
	);
};

export default Login;
