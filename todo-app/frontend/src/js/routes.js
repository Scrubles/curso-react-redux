'use strict'

import React, {Component} from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Todo from './components/todo/todo';
import About from './components/about/about';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/todos' component={Todo} />
          <Route path='/about' component={About} />
          <Redirect from='*' to='/todos' />
        </Switch>
      </HashRouter>
    );
  }
};

export default Routes;