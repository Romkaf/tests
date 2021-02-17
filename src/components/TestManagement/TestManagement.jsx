import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';
import Dropdown from './Dropdown';
import FormQuestion from './FormQuestion';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const TestManagement = ({
	test,
	onModalShow,
	onRequestDeleteTest,
	onRequestEditTest,
}) => {
	const [value, setValue] = useState(test?.title || '');
	const [question, setQuestion] = useState(null);
	const [typeQuestion, setTypeQuestion] = useState('');
	const history = useHistory();

	useEffect(() => question && !typeQuestion && setQuestion(null), [
		typeQuestion,
	]);

	const handleInputChange = (evt) => {
		setValue(evt.target.value);
	};

	const handleTestDelete = () => {
		onRequestDeleteTest(test.id, history);
	};

	const handleTestSave = () => {
		onRequestEditTest(test.id, value, history);
	};

	const handleBtnSaveClick = () =>
		onModalShow('Сохранить изменения?', handleTestSave);

	const handleBtnDeleteClick = () =>
		onModalShow('Вы действительно хотите удалить тест?', handleTestDelete);

	return (
		<div>
			<h4 className="input-group align-items-baseline mb-3">
				<label>Test :</label>
				<input
					type="text"
					className="form-control ml-2 rounded shadow-sm"
					value={value}
					onChange={handleInputChange}
				/>
			</h4>
			<div className="btn-group mb-3">
				<button className="btn btn-secondary" onClick={handleBtnDeleteClick}>
					Delete
				</button>

				<button className="btn btn-primary" onClick={handleBtnSaveClick}>
					Save
				</button>
			</div>
			<Link to="/tests" className="btn btn-primary mb-3 float-right">
				To home
			</Link>
			<div>
				<QuestionList
					questions={test?.questions || []}
					onSetTypeQuestion={setTypeQuestion}
					onSetQuestion={setQuestion}
				/>
				<Dropdown
					onSetTypeQuestion={setTypeQuestion}
					typeQuestion={typeQuestion}
				/>
				{typeQuestion && (
					<FormQuestion
						onSetTypeQuestion={setTypeQuestion}
						typeQuestion={typeQuestion || null}
						question={question}
					/>
				)}
			</div>
		</div>
	);
};

TestManagement.propTypes = {
	test: PropTypes.object || null,
	onModalShow: PropTypes.func,
	onRequestDeleteTest: PropTypes.func,
	onRequestEditTest: PropTypes.func,
};

export default TestManagement;
