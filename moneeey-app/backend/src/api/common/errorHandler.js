'use strict'

const _ = require('lodash');

const parseErros = (nodeRestfulErrors) => {
  const errors = [];
  _.forIn(nodeRestfulErrors, (error) => errors.push(error.message));
  return errors;
};

module.exports = (request, response, next) => {
  const bundle = response.locals.bundle;
  if (bundle.errors) {
    const errors = parseErros(bundle.errors);
    response.status(500).json({ errors });
  } else {
    next();
  }
};