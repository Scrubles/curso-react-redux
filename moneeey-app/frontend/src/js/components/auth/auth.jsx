'use strict'

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login, signup } from './actions';
import './auth.scss';

import Row from '../common/grid/row';
import Column from '../common/grid/column';
import If from '../common/logic/if';
import FormGroup from '../common/form/formGroup';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { loginMode: true };
  };

  toggleMode() {
    this.setState({ loginMode: !this.state.loginMode });
  };

  onSubmit(values) {
    const { login, signup } = this.props;
    this.state.loginMode ? login(values) : signup(values);
  };

  render() {
    const { loginMode } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div className="login-box">
        <div className="login-logo"><strong>Moneeey</strong></div>
        <div className="login-box-body">
          <p className="login-box-msg">Welcome!</p>
          <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
            <If test={!loginMode}>
              <Field component={FormGroup} type="input" name="name"
                placeholder="Name" icon='user' />
            </If>
            <Field component={FormGroup} type="email" name="email"
              placeholder="E-mail" icon='envelope' />
            <Field component={FormGroup} type="password" name="password"
              placeholder="Password" icon='lock' />
            <If test={!loginMode}>
              <Field component={FormGroup} type="password" name="confirm_password"
                placeholder="Confirm password" icon='lock' />
            </If>
            <Row>
              <Column xs={4}>
                <button type="submit" className="btn btn-primary btn-block btn-flat">
                  {loginMode ? 'Login' : 'Signup'}
                </button>
              </Column>
            </Row>
          </form>
          <br />
          <a onClick={() => this.toggleMode()}>
            {loginMode ? 'New user? Signup here!' : 'Already registered? Login here!'}
          </a>
        </div>
      </div>
    )
  };
}

Auth = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  signup
}, dispatch);
export default connect(null, mapDispatchToProps)(Auth);