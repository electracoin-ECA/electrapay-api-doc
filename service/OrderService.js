'use strict';


/**
 * Add a new order request
 * Process a new order request
 *
 * order Ordernew New order details
 * returns order
 **/
exports.orderNew = function(order) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "shortdescription" : "Electra donation",
  "paymentcategory" : "donation",
  "orderstatus" : "PENDING",
  "qrcode" : "null",
  "ordertransactionid" : "null",
  "uuid" : "f59f2257-3363-4f2f-a8a4-a288b7c0b7db",
  "quotecurrency" : "ECA",
  "reference" : "ORD-11109",
  "ordertoken" : 11654.0,
  "accountid" : 1.0,
  "quoteamount" : 20000.0,
  "orderamount" : 12.0,
  "longdescription" : "Electra donation to developers",
  "id" : 1.0,
  "ordercurrency" : "USD"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

