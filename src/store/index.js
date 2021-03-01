import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '@models/reducers';
import rootSaga from '@sagas';
import { locStorKey } from '@constants';

const initialState = JSON.parse(localStorage.getItem(locStorKey)) || {
	user: null,
	tests: { tests: [] },
	error: '',
	modal: false,
	registration: true,
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	initialState,
	composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
