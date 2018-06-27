import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';

let rootElement = document.createElement('app');

let render = Component =>
	ReactDOM.render(
		<Component /> as React.DOMElement<any, any>,
		rootElement
	);

document.body.appendChild(rootElement);
render(App);

// Hot Module Replacement
if (module.hot) {
	module.hot.accept('./app', () => {
		import('./app').then(NextAppModule => {
			render(NextAppModule.default)
		});
	});
}