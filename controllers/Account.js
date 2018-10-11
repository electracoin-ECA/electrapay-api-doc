'use strict';

var utils = require('../utils/writer.js');
var Account = require('../service/AccountService');

module.exports.accountNew = function accountNew (req, res, next) {
  Account.accountNew()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAccount = function getAccount (req, res, next) {
  var id = req.swagger.params['id'].value;
  Account.getAccount(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
