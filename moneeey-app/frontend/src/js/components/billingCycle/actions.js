'use strict'

import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import {reset as resetForm, initialize} from 'redux-form';

import appConstants from '../../constants';
import constants from './constants';

import {showTabs, selectTab} from '../common/tabs/actions';

const BILLING_CYCLES_URL = `${appConstants.API_URL}/billingCycles`;
const INITIAL_VALUES = {credits: [{}], debts: [{}]};

export function getList() {
  const promise = axios.get(BILLING_CYCLES_URL);
  return {
    type: constants.BILLING_CYCLES_LISTED,
    payload: promise
  };
}

export function add(billingCycle) {
  return submit(billingCycle, 'post');
}

export function edit(billingCycle) {
  return submit(billingCycle, 'put');
}

export function remove(billingCycle) {
  return submit(billingCycle, 'delete');
}

function submit(billingCycle, method) {
  return (dispatch) => {
    const id = billingCycle._id ? billingCycle._id : '';
    axios[method](`${BILLING_CYCLES_URL}/${id}`, billingCycle).then((response) => {
      toastr.success('Success', 'Operation realized with success');
      dispatch(init());
    }).catch((error) => {
      error.response.data.errors.forEach(err => toastr.error('Error', err));
    });
  };
}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ]
}

export function showUpdate(billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ];
}

export function showDelete(billingCycle) {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ];
}