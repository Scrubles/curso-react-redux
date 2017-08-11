'use strict'

import React, {Component} from 'react';
import PageHeader from '../navigation/pageHeader';

class About extends Component {
  render() {
    return (
      <div>
        <PageHeader name='About' />
        <h3>Lorem Ipsum</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Maecenas pulvinar magna ac euismod hendrerit.</p>
      </div>
    );
  }
};

export default About;