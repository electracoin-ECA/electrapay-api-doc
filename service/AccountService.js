'use strict';


/**
 * Add a new account
 * Add a new account.
 *
 * returns account
 **/
exports.accountNew = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contactemail" : "edwardp@electrabay.com",
  "country" : "NL",
  "city" : "Amsterdam",
  "timezone" : "Europe/Amsterdam",
  "vatno" : "V140976",
  "accounttype" : "nonprofit",
  "description" : "Electra Donation Wallet",
  "organisation" : "ElectraProject",
  "language" : "nl",
  "uuid" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "logourl" : "http://electraproject.org/images/logo.svg",
  "plugintype" : "MAGENTO2",
  "logoimg" : "http://electraproject.org/images/logo.svg",
  "walletaddress" : "EVggmyfsA7krt7XsCYyh5DVe5JxDbVs5cZ",
  "postalcode" : 2390.0,
  "id" : 1.0,
  "contactphone" : "+44 333 333 333",
  "contactmobile" : "+44 333 333 333",
  "website" : "https://www.electrabay",
  "contactfirstname" : "Edward",
  "address3" : "address3",
  "address2" : "address2",
  "address1" : "address1",
  "contactlastname" : "Peterson",
  "callbackuri" : "https://www.electrabay/api",
  "contacttitle" : "Mr",
  "contactmiddlenames" : "Mark",
  "name" : "Electra Donation Wallet",
  "suburb" : "Leidseplein",
  "walletcurrency" : "ECA",
  "defaultvat" : 25.0,
  "currencies" : [ "USD" ],
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
 * Retrieve the account details.
 *
 * id Long Enter the accountid to retrieve
 * returns account
 **/
exports.getAccount = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contactemail" : "edwardp@electrabay.com",
  "country" : "NL",
  "city" : "Amsterdam",
  "timezone" : "Europe/Amsterdam",
  "vatno" : "V140976",
  "accounttype" : "nonprofit",
  "description" : "Electra Donation Wallet",
  "organisation" : "ElectraProject",
  "language" : "nl",
  "uuid" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "logourl" : "http://electraproject.org/images/logo.svg",
  "plugintype" : "MAGENTO2",
  "logoimg" : "http://electraproject.org/images/logo.svg",
  "walletaddress" : "EVggmyfsA7krt7XsCYyh5DVe5JxDbVs5cZ",
  "postalcode" : 2390.0,
  "id" : 1.0,
  "contactphone" : "+44 333 333 333",
  "contactmobile" : "+44 333 333 333",
  "website" : "https://www.electrabay",
  "contactfirstname" : "Edward",
  "address3" : "address3",
  "address2" : "address2",
  "address1" : "address1",
  "contactlastname" : "Peterson",
  "callbackuri" : "https://www.electrabay/api",
  "contacttitle" : "Mr",
  "contactmiddlenames" : "Mark",
  "name" : "Electra Donation Wallet",
  "suburb" : "Leidseplein",
  "walletcurrency" : "ECA",
  "defaultvat" : 25.0,
  "currencies" : [ "USD" ],
  "status" : "ACTIVE"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

