import React, { useState } from 'react';
import QuestionList from './QuestionList/QuestionList';
import PropsTypes from 'prop-types';

const TestDoing = ({ questions, title }) => {
	const [count, setCount] = useState(questions.length ? 1 : 0);

	const handlerNextClick = () => {
		setCount(count + 1);
	};

	const handlerPrevClick = () => {
		setCount(count - 1);
	};

	return (
		<div className="mt-3">
			<h4>{title}</h4>
			<span>
				{count}/{questions.length}
			</span>

			<QuestionList questions={questions} count={count} />
			<div class="btn-group">
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
			<button className="btn btn-primary float-right">Finish test</button>
		</div>
	);
};

TestDoing.propTypes = {
	questions: PropsTypes.array,
	title: PropsTypes.string,
};

export default TestDoing;
