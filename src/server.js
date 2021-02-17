'use strict';

const express = require('express');
const app = express();
const errorHandler404 = require('./error-handlers/404.js');
const errorHandler500 = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');


app.use(express.json());


module.exports = {
  app: app,
  start: function(port) {
    app.listen(port, () => {
      console.log(`App is up on PORT :: ${port}`);
    });
  },
};