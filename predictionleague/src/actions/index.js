/*
var authActions = require("./auth"),
	quotesActions = require("./quotes"),
	feedbackActions = require("./feedback");

  module.exports = Object.assign({},authActions,quotesActions,feedbackActions);
*/

import authActions from './auth'

module.exports = Object.assign({},authActions);
