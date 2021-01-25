import { createStore } from 'redux';
import reducer from '@models/reducers';
// import { locStorKey } from '@constants';

const initialState = {
	modal: { isShow: false },
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
