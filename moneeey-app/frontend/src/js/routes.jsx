'use strict'

import React, {Component} from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import BillingCycle from './components/billingCycle/billingCycle';

class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/billingCycles" component={BillingCycle} />
          <Redirect from="*" to="/dashboard" />
        </Switch>
      </HashRouter>
    );
  }
};

export default Routes;