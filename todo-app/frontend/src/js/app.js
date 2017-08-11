'use strict'

import React, {Component} from 'react';
import Menu from './components/navigation/menu';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="container">
         <Menu />
         <Routes />
      </div>
    );
  }
};

export default App;