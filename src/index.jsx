/**
 * @flow
 *
 * External Dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal Dependencies
 */
import App from './App';

/**
 * Mount to DOM
 */
ReactDOM.render(
  <App />,
  // $FlowFixMe
  document.querySelector('#app')
);

// $FlowFixMe
if (module.hot) {
  module.hot.accept();
}
