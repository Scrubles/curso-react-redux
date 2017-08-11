'use strict'

import 'admin-lte/plugins/jQueryUI/jquery-ui.min';
import 'admin-lte/plugins/fastclick/fastclick';
import 'admin-lte/plugins/slimScroll/jquery.slimscroll.min';
import 'admin-lte/dist/js/app.min';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios'

import Routes from './routes';

import Auth from './components/auth/auth';
import { validateToken } from './components/auth/actions';
import Header from './components/common/header/header';
import SideBar from './components/common/navigation/sideBar';
import Footer from './components/common/footer/footer';

class App extends Component {
  componentWillMount() {
    if (this.props.auth.user) {
      this.props.validateToken(this.props.auth.user.token)
    }
  }

  render() {
    const { user, validToken } = this.props.auth;
    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token;
      return (
        <div className="wrapper">
          <Header />
          <SideBar />
          <div className="content-wrapper">
            <Routes />
          </div>
          <Footer />
        </div>
      );
    } else if (!user && !validToken) {
      return (
        <Auth />
      );
    } else {
      return false;
    }
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch => bindActionCreators({
  validateToken
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App)