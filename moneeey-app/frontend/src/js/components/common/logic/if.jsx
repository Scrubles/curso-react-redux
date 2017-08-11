'use strict'

import React, {Component} from 'react';

class If extends Component {
  render() {
    if(this.props.test)
      return this.props.children;

    return null;
  }
};

export default If;