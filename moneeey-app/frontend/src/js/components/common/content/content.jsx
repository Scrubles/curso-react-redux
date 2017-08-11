'use strict'

import React, {Component} from 'react';

import If from '../logic/if';

class Content extends Component {
  render() {
    return (
      <div>
        <If test={!!this.props.title}>
          <section className="content-header">
            <h1>{this.props.title}</h1>
          </section>
        </If>
        <section className="content">
          {this.props.children}
        </section>
      </div>
    );
  }
};

export default Content;