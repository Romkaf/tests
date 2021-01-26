import React from 'react';

const Button = ({ label, func, color }) => {
	return (
		<button
			type="button"
			className={`btn btn-block btn-${color} mt-4`}
			onClick={func}
		>
			{label}
		</button>
	);
};

export default Button;
