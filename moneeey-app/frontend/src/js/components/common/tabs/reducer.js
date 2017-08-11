'use strict'

import constants from './constants';

const INITIAL_STATE = {selected: '', visible: {}};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case constants.tabSelected:
      return {...state, selected: action.payload};
    case constants.tabShowed:
      return {...state, visible: action.payload};
    default:
      return state;
  }
};