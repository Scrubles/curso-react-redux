'use strict'

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';

import AuthReducer from './components/auth/reducer';
import DashboardReducer from './components/dashboard/reducer';
import BillingCycleReducer from './components/billingCycle/reducer';
import TabReducer from './components/common/tabs/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  auth: AuthReducer,
  dashboard: DashboardReducer,
  billingCycle: BillingCycleReducer,
  tab: TabReducer
});

export default rootReducer;