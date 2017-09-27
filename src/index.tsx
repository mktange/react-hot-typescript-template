import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

let rootElement = document.getElementById('app');

let render = Component =>
	ReactDOM.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		rootElement
	);


render(App);


// Hot Module Replacement
if (module.hot) {
	module.hot.accept('./app', () => {
		import('./app').then(NextAppModule => {
			render(NextAppModule.default)
		});
	});
}