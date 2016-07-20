import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppRouter from './router';

import { Provider } from 'react-redux';
import configureStore from '../redux/store'

const store = configureStore();

class App extends React.Component {
  render() {
    return <AppRouter />;
  }
}

injectTapEventPlugin();
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
