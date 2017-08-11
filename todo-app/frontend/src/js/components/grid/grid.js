'use strict'

import React, {Component} from 'react';

class Grid extends Component {
  render() {
    let classes = [];
    if(this.props.xs)
      classes.push('col-xs-' + this.props.xs);
    if(this.props.sm)
      classes.push('col-sm-' + this.props.sm);
    if(this.props.md)
      classes.push('col-md-' + this.props.md);
    if(this.props.lg)
      classes.push('col-lg-' + this.props.lg);
    return (
      <div className={classes.join(' ')}>
        {this.props.children}
      </div>
    );
  }
};

export default Grid;