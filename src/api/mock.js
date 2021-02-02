import {
	getRequest,
	postRequest,
	deleteRequest,
	patchRequest,
} from './request';

export const fetchSignupUser = (data) => postRequest(`/`, data);
export const fetchSigninUser = (data) => getRequest(`/`, data);

const mockDB = {
	users: [
		{ username: 'user1', password: '123456', is_admin: false, id: 1 },
		{ username: 'user2', password: '123456', is_admin: false, id: 2 },
		{ username: 'admin', password: '123456', is_admin: true, id: 3 },
	],
	tests: [
		{
			title: 'Игровыне тесты',
			id: 1,
			questions: [
				{
					title: 'Выберите зимний вид спорта',
					question_type: 'single',
					question_id: 1,
					answers: [
						{ text: 'Футбол', is_right: false },
						{ text: 'Хоккей', is_right: true },
						{ text: 'Волейбол', is_right: false },
					],
				},
				{
					title: 'Выберите летние виды спорта',
					question_type: 'multiple',
					question_id: 2,
					answers: [
						{ text: 'Футбол', is_right: true },
						{ text: 'Хоккей', is_right: false },
						{ text: 'Волейбол', is_right: true },
					],
				},
			],
		},
	],
};

// export const fetchSigninUser = (data) =>
// 	Promise.resolve(
// 		mockDB.users.find(
// 			(it) => it.username === data.username && it.password === data.password,
// 		),
// 	);
// export const fetchCreateTest = (data) => postRequest(`/tests`, data);
