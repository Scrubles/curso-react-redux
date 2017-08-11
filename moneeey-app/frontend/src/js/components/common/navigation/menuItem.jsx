'use strict'

import React, {Component} from 'react';

class MenuItem extends Component {
  render() {
    return (
      <li>
        <a href={this.props.path}>
          <i className={this.props.icon} /> <span>{this.props.label}</span>
        </a>
      </li>
    );
  }
};

export default MenuItem;