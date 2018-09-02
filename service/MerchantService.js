'use strict';


/**
 * Fetch account details
 * No parameters
 *
 * returns Account
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
  "vatno" : "+44 333 333 333",
  "description" : "Electra Donation Wallet",
  "organisation" : "+44 333 333 333",
  "language" : "nl",
  "type" : "nonprofit",
  "contactname" : "Mr E Peterson",
  "walletaddress" : "E",
  "phone" : "+44 333 333 333",
  "postalcode" : "2390",
  "callbackuri" : "https://www.electrabay/api",
  "name" : "Electra Donation Wallet",
  "logo" : "http://electraproject.org/images/logo.svg",
  "currency" : [ "USD" ],
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "defaultvat" : "+44 333 333 333",
  "email" : "support@electrabay.com",
  "status" : "+44 333 333 333"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new account
 * No parameters
 *
 * returns Account
 **/
exports.newAccount = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "NL",
  "website" : "https://www.electrabay",
  "address2" : "address2",
  "city" : "Amsterdam",
  "address1" : "address1",
  "timezone" : "Europe/Amsterdam",
  "vatno" : "+44 333 333 333",
  "description" : "Electra Donation Wallet",
  "organisation" : "+44 333 333 333",
  "language" : "nl",
  "type" : "nonprofit",
  "contactname" : "Mr E Peterson",
  "walletaddress" : "E",
  "phone" : "+44 333 333 333",
  "postalcode" : "2390",
  "callbackuri" : "https://www.electrabay/api",
  "name" : "Electra Donation Wallet",
  "logo" : "http://electraproject.org/images/logo.svg",
  "currency" : [ "USD" ],
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "defaultvat" : "+44 333 333 333",
  "email" : "support@electrabay.com",
  "status" : "+44 333 333 333"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

