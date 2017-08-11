'use strict'

import './scss/app.scss';
import App from './js/app';

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

const renderApp = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};
renderApp(App);

if (module.hot) {
  module.hot.accept('./js/app', () => {
    const NextApp = require('./js/app').default;
    renderApp(NextApp);
  });
}