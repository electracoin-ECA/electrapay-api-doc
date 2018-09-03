'use strict';

var utils = require('../utils/writer.js');
var Account = require('../service/AccountService');

module.exports.add = function add (req, res, next) {
  Account.add()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccount = function getAccount (req, res, next) {
  Account.getAccount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
