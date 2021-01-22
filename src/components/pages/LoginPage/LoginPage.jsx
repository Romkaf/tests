import React, { useState } from 'react';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
	const [isRegist, setIsRegist] = useState(true);

	const handleBtnClick = (evt) => {
		setIsRegist((state) => !state);
		evt.target.blur();
	};

	return (
		<form className={styles.root}>
			<div className="form-group">
				<label htmlFor="login">Login</label>
				<input
					type="text"
					className="form-control"
					id="login"
					required
					minLength={2}
					autoFocus
				/>
			</div>
			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					type="password"
					className="form-control"
					id="password"
					required
					minLength={2}
				/>
			</div>
			{!isRegist && (
				<div className="form-group">
					<label htmlFor="password">Confirm password</label>
					<input
						type="password2"
						className="form-control"
						id="password2"
						required
						minLength={2}
					/>
				</div>
			)}
			{isRegist ? (
				<>
					<button type="submit" className="btn btn-block btn-primary mt-4">
						Log In
					</button>
					<button
						type="button"
						className="btn btn-block btn-secondary mt-4"
						onClick={handleBtnClick}
					>
						I don't have an account
					</button>
				</>
			) : (
				<>
					<button type="submit" className="btn btn-block btn-primary mt-4">
						Registration
					</button>
					<button
						type="button"
						className="btn btn-block btn-secondary mt-4"
						onClick={handleBtnClick}
					>
						I have an account
					</button>
				</>
			)}
		</form>
	);
};

export default LoginPage;
