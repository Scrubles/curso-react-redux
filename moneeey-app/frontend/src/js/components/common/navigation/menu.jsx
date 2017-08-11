'use strict'

import React, {Component} from 'react';

import Item from './menuItem';
import Tree from './menuTree';

class Menu extends Component {
  render() {
    return (
      <ul className="sidebar-menu">
        <Item path="#" label="Dashboard" icon="fa fa-dashboard" />
        <Tree label="Register" icon="fa fa-edit">
          <Item path="#billingCycles" label="Billing Cycles" icon="fa fa-usd" />
        </Tree>
      </ul>
    );
  }
};

export default Menu;