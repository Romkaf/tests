import React from 'react';

import './ErrorIndicator.scss';

const ErrorIndicator = ({ text }) => {
	return (
		<div className="error-indicator">
			<span>{text}</span>
		</div>
	);
};

export default ErrorIndicator;
