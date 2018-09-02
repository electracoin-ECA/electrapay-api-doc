'use strict';

var utils = require('../utils/writer.js');
var Merchant = require('../service/MerchantService');

module.exports.newAccount = function newAccount (req, res, next) {
  Merchant.newAccount()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
