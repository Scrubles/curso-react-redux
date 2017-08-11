'use strict'

import React, {Component} from 'react';

class Column extends Component {
  getClassName() {
    const classes = [];
    if(this.props.xs)
      classes.push(`col-xs-${this.props.xs}`);
    if(this.props.sm)
      classes.push(`col-sm-${this.props.sm}`);
    if(this.props.md)
      classes.push(`col-md-${this.props.md}`);
    if(this.props.lg)
      classes.push(`col-lg-${this.props.lg}`);
    return classes.join(' ');
  }

  render() {
    return (
      <div className={this.getClassName()}>
        {this.props.children}
      </div>
    );
  }
};

export default Column;