import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';

import { Provider } from 'react-redux';
import configureStore from '../redux/store'

const store = configureStore();


injectTapEventPlugin();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
