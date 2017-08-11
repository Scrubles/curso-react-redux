'use strict'

import React, {Component} from 'react';

import Navbar from '../navigation/navbar';

class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <a href="/#/" className="logo">
          <span className="logo-mini">
            <i className="fa fa-money"></i>
          </span>
          <span className="logo-lg">
            <i className="fa fa-money"></i> <strong>Moneeey</strong>
          </span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
          <Navbar />
        </nav>
      </header>
    );
  }
};

export default Header;