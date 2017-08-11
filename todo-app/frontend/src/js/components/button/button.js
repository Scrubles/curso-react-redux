'use strict'

import React, {Component} from 'react';
import If from '../logic/if';

class Button extends Component {
  render() {
    return (
      <button className={'btn btn-' + (this.props.style || 'default')} onClick={this.props.onClick}>
        <If test={!!this.props.text}>
          <span>{this.props.text + ' '}</span>
        </If>
        <If test={!!this.props.icon}>
          <i className={'fa fa-' + this.props.icon} />
        </If>
      </button>
    );
  }
};

export default Button;