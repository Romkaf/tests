import React from 'react';
import TestManagement from './TestManagement';

const TestManagementContainer = () => {
	const test = { title: 'Экспериментальный', id: 22 };
	return (
		<div className="container pt-4">
			<TestManagement test={test} />
		</div>
	);
};

export default TestManagementContainer;
