import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import store from './store';
import { Provider } from 'react-redux';
import { locStorKey } from '@constants';
import '@styles/bootstrap.min.css';
import '@styles/general.scss';

store.subscribe(() => {
	localStorage.setItem(locStorKey, JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
