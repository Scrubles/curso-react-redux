'use strict'

import constants from './constants';

const INITIAL_STATE = {list: []};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case constants.BILLING_CYCLES_LISTED:
      return {...state, list: action.payload.data};
    default:
      return state;
  }
};