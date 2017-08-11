'use strict'

import constants from './constants';

const INITIAL_STATE = {summary: {credit: 0, debt: 0}};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case constants.BILLING_SUMMARY_LISTED:
      return {...state, summary: action.payload.data};
    default:
      return state;
  }
};