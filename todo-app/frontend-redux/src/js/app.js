'use strict'

import React, {Component} from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import multi from 'redux-multi';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import rootReducer from './reducers.js';
import Routes from './routes';

import Menu from './components/navigation/menu';

const store = applyMiddleware(multi, promise, thunk)(createStore)(rootReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <Menu />
          <Routes />
        </div>
      </Provider>
    );
  }
};

export default App;