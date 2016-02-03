'use strict';

let staticAppData = {
  baseUrl : 'http://tic-tac-toe.wdibos.com/',
};

// Functionality of all api features.
let logResponseBody = function(responseBody) {
  console.table(responseBody);
};

let logRequestError = function(requestObject) {
  console.error(requestObject);
};

// API Controls
let signUp = function(event) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: staticAppData.baseUrl + '/sign-up',
    type: 'POST',
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(logResponseBody)
  .fail(logRequestError);
};

let logIn = function(event) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: staticAppData.baseUrl + '/sign-in',
    type: 'POST',
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function (data) {
    logResponseBody;
    staticAppData = data;
  })
  .fail(logRequestError);
};

let init = function() {
  $('#register-login').on('submit', function () {
    signUp;
  });
  $('#LogOut').on('submit', LogOut);
  console.log(staticAppData);
};

$(document).ready(init);
module.exports = true;
