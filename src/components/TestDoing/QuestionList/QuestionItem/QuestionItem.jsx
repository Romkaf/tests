import React, { useState } from 'react';
import classnames from 'classnames';
import PropsTypes from 'prop-types';

const QuestionItem = ({ question, count, idx }) => {
	const { title, question_type: type, answers, id } = question;

	const classContainer = classnames({
		'custom-control': type !== 'number',
		'custom-checkbox': type === 'multiple',
		'custom-radio': type === 'single',
	});

	const classInput = classnames({
		'custom-control-input': type !== 'number',
		'form-control': type === 'number',
	});

	const classItem = classnames('carousel-item', 'mb-3', {
		active: count === idx + 1,
	});

	const choiceType = (key) => {
		switch (key) {
			case 'single':
				return 'radio';
			case 'multiple':
				return 'checkbox';
			case 'number':
				return 'number';

			default:
				console.wrang('Неверное значение question_type');
		}
	};

	return (
		<li className={classItem}>
			<h5>{title}</h5>
			<form>
				<ul className="list-group">
					{answers.map((it) => (
						<li className="list-group-item" key={it.id}>
							<div className={classContainer}>
								<input
									id={it.id}
									className={classInput}
									type={choiceType(type)}
									name={String(id)}
								/>
								{type !== 'number' && (
									<label className="custom-control-label" htmlFor={it.id}>
										{it.text}
									</label>
								)}
							</div>
						</li>
					))}
				</ul>
			</form>
		</li>
	);
};

QuestionItem.propTypes = {
	questions: PropsTypes.array,
	count: PropsTypes.number,
	idx: PropsTypes.number,
};

export default QuestionItem;
