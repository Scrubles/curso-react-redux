'use strict'

import constants from './constants';

const userKey = '_moneeey_user';
const INITIAL_STATE = {
  user: {name: 'Teste'},
  // user: JSON.parse(localStorage.getItem(userKey)),
  validToken: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.TOKEN_VALIDATED:
      if (action.payload) {
        return { ...state, validToken: true };
      } else {
        localStorage.removeItem(userKey);
        return { ...state, validToken: false, user: null };
      }
    case constants.USER_FETCHED:
      localStorage.setItem(userKey, JSON.stringify(action.payload));
      return { ...state, user: action.payload, validToken: true };
    default:
      return state;
  }
}
