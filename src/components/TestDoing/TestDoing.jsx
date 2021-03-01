import React, { useState } from 'react';
import QuestionList from './QuestionList/QuestionList';
import PropsTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const TestDoing = ({ questions, title, onModalShow }) => {
	const [count, setCount] = useState(questions.length ? 1 : 0);
	const history = useHistory();

	const handlerNextClick = () => {
		setCount(count + 1);
	};

	const handlerPrevClick = () => {
		setCount(count - 1);
	};

	const handleRouteChange = () => history.push('/tests');

	const handleFinishBtnClick = () => {
		const answers = getAnswers();
		const rightAnswers = checkAnswers(answers);
		onModalShow(
			`${rightAnswers.length} right answer(s) from ${questions.length} questions`,
			handleRouteChange,
			'To home',
		);
	};

	const getAnswers = () => {
		const elements = Array.from(document.querySelectorAll('form'));

		return elements.map((it) => ({
			id: it.name,
			answers: Array.from(it.elements).map((it) => ({
				id: it.id,
				value: it.type === 'number' ? it.value : it.checked,
			})),
		}));
	};

	const checkAnswers = (userAnswers) => {
		let rightAnswers = [];
		for (let i = 0; i < userAnswers.length; i++) {
			const rightAnswer = userAnswers[i].answers.every((it, idx) => {
				if (questions[i].question_type === 'number') {
					return it.value === questions[i].answers[idx].text;
				} else {
					return it.value === questions[i].answers[idx].is_right;
				}
			});
			rightAnswer && rightAnswers.push(questions[i].id);
		}

		return rightAnswers;
	};

	const handleHomeBtnClick = () => history.push('/tests');

	return (
		<div className="mt-3">
			<h4>{title}</h4>
			{questions.length ? (
				<>
					<span>
						{count}/{questions.length}
					</span>
					<QuestionList questions={questions} count={count} />
					<div className="btn-group">
						<button
							className="btn btn-primary"
							onClick={handlerPrevClick}
							disabled={count < 2}
						>
							Prev
						</button>
						<button
							className="btn btn-primary"
							onClick={handlerNextClick}
							disabled={count === questions.length}
						>
							Next
						</button>
					</div>
					<button
						className="btn btn-primary float-right"
						onClick={handleFinishBtnClick}
					>
						Finish test
					</button>
				</>
			) : (
				<div className="d-flex align-items-center">
					<span>Test does not have quetions</span>
					<button
						className="btn-sm btn-primary ml-auto"
						onClick={handleHomeBtnClick}
					>
						To home
					</button>
				</div>
			)}
		</div>
	);
};

TestDoing.propTypes = {
	questions: PropsTypes.array,
	title: PropsTypes.string,
	onModalShow: PropsTypes.func,
};

export default TestDoing;
