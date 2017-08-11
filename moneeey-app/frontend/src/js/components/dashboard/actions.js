'use strict'

import axios from 'axios';

import appConstants from '../../constants';
import constants from './constants';

const BILLING_CYCLES_URL = `${appConstants.API_URL}/billingCycles`;

export function getSummary() {
  const promise = axios.get(`${BILLING_CYCLES_URL}/summary`);
  return {
    type: constants.BILLING_SUMMARY_LISTED,
    payload: promise
  };
}