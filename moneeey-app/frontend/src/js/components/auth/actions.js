'use strict'

import { toastr } from 'react-redux-toastr';
import axios from 'axios';

import appConstants from '../../constants';
import constants from './constants';

export function login(values) {
  return submit(values, `${appConstants.OAPI_URL}/login`);
};

export function signup(values) {
  return submit(values, `${appConstants.OAPI_URL}/signup`);
};

function submit(values, url) {
  return dispatch => {
    axios.post(url, values).then(resp => {
      dispatch([
        { type: constants.USER_FETCHED, payload: resp.data }
      ]);
    }).catch(e => {
      e.response.data.errors.forEach(error => toastr.error('Error', error));
    });
  };
};

export function logout() {
  return { type: constants.TOKEN_VALIDATED, payload: false };
};

export function validateToken(token) {
  return dispatch => {
    if (token) {
      axios.post(`${consts.OAPI_URL}/validateToken`, { token }).then(resp => {
        dispatch({ type: constants.TOKEN_VALIDATED, payload: resp.data.valid });
      }).catch(e => dispatch({ type: constants.TOKEN_VALIDATED, payload: false }));
    } else {
      dispatch({ type: constants.TOKEN_VALIDATED, payload: false });
    }
  }
};