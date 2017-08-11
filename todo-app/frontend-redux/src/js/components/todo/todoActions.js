'use strict'

import axios from 'axios';

const API_URL = 'http://localhost:3000/api/todos';

export const changeDescription = (description) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: description
});

export const clearDescription = () => (
  [
    changeDescription(''),
    list()
  ]
);

export const add = (description) => {
  return (dispatch) => {
    axios.post(API_URL, {description}).then((response) => {
      dispatch(clearDescription());
    });
  };
};

export const edit = (todo) => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    axios.put(`${API_URL}/${todo._id}`, todo).then((response) => {
      dispatch(list(description));
    });
  };
};

export const remove = (todo) => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    axios.delete(`${API_URL}/${todo._id}`, todo).then((response) => {
      dispatch(list(description));
    });
  };
};

export const list = (description) => {
  const filterByDescription = description ? `&description__regex=/${description}/i` : '';
  const promise = axios.get(`${API_URL}?sort=-createdAt${filterByDescription}`);
  return {
    type: 'TODO_LISTED',
    payload: promise
  }
};