'use strict'

import './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import ReduxToastr from 'react-redux-toastr';

import App from './js/app';
import reducers from './js/reducers';

const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers);
const renderApp = (App) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <App />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar />
        </div>
      </Provider>
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