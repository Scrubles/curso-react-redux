'use strict'

import React, {Component} from 'react';

class PageHeader extends Component {
  render() {
    return (
      <header className='page-header'>
        <h2>{this.props.name}</h2>
      </header>
    );
  }
};

export default PageHeader;