'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');

module.exports.orderNew = function orderNew (req, res, next) {
  var order = req.swagger.params['order'].value;
  Order.orderNew(order)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
