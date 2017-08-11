'use strict'

import React, {Component} from 'react';

class ValueBox extends Component {
  render() {
    return (
      <div className={`small-box bg-${this.props.color}`}>
        <div className="inner">
          <h3>{this.props.value}</h3>
          <p>{this.props.text}</p>
        </div>
        <div className="icon">
          <i className={`fa fa-${this.props.icon}`} />
        </div>
      </div>
    );
  }
};

export default ValueBox;