'use strict';


/**
 * Add a new account
 * Add a new account.
 *
 * returns account
 **/
exports.add = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "NL",
  "website" : "https://www.electrabay",
  "address2" : "address2",
  "city" : "Amsterdam",
  "address1" : "address1",
  "timezone" : "Europe/Amsterdam",
  "vatno" : "140976",
  "description" : "Electra Donation Wallet",
  "organisation" : "ElectraProject",
  "language" : "nl",
  "type" : "nonprofit",
  "contactname" : "Mr E Peterson",
  "plugintype" : "MAGENTO2",
  "walletaddress" : "EVggmyfsA7krt7XsCYyh5DVe5JxDbVs5cZ",
  "phone" : "+44 333 333 333",
  "postalcode" : "2390",
  "callbackuri" : "https://www.electrabay/api",
  "name" : "Electra Donation Wallet",
  "logo" : "http://electraproject.org/images/logo.svg",
  "currency" : [ "USD" ],
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "defaultvat" : 25.0,
  "email" : "support@electrabay.com",
  "status" : "ACTIVE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch account details
 * No parameters
 *
 * returns account
 **/
exports.getAccount = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "NL",
  "website" : "https://www.electrabay",
  "address2" : "address2",
  "city" : "Amsterdam",
  "address1" : "address1",
  "timezone" : "Europe/Amsterdam",
  "vatno" : "140976",
  "description" : "Electra Donation Wallet",
  "organisation" : "ElectraProject",
  "language" : "nl",
  "type" : "nonprofit",
  "contactname" : "Mr E Peterson",
  "plugintype" : "MAGENTO2",
  "walletaddress" : "EVggmyfsA7krt7XsCYyh5DVe5JxDbVs5cZ",
  "phone" : "+44 333 333 333",
  "postalcode" : "2390",
  "callbackuri" : "https://www.electrabay/api",
  "name" : "Electra Donation Wallet",
  "logo" : "http://electraproject.org/images/logo.svg",
  "currency" : [ "USD" ],
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "defaultvat" : 25.0,
  "email" : "support@electrabay.com",
  "status" : "ACTIVE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

