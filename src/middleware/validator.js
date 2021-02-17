'use strict';

const validator = (request, response, next) => {
  const person = request.body;
  if(!person.name) {
    next('No name found on request');
  }
};

module.exports = validator;