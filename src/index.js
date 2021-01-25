import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';
import store from './store';
import { Provider } from 'react-redux';
import '@styles/bootstrap.min.css';
import '@styles/general.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
