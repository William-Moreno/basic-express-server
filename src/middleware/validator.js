'use strict';

const validator = (request, response, next) => {
  const person = {
    name: request.query.name,
  };
  console.log(person);
  if(!person.name) {
    response.status(500).send({
      status: 500,
      error: 'Server Error',
    });
  }

  next();
};

module.exports = validator;