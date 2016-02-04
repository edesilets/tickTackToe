'use strict';

let staticAppData = {
  baseUrl : 'http://tic-tac-toe.wdibos.com',
};


// Functionality of all api features.
let logResponseBody = function(responseBody) {
  //console.table(responseBody);
  console.log('pass from AJAX');
  console.log(responseBody);
};

let logRequestError = function(requestObject) {
  console.error('fail from AJAX');
  console.error(requestObject);
};

// API Controls
/* ------------------- LOG IN OUT OR REGISTER  API --------------------------------------------*/
let register = function(event) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: staticAppData.baseUrl + '/sign-up', //"http://httpbin.org/post",
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
    console.log(data);
    staticAppData.userData = data;
  })
  .fail(logRequestError);
};

let logOut = function(event) {
  event.preventDefault();                // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: staticAppData.baseUrl + '/sign-out/' + staticAppData.userData.user.id,
    type: 'DELETE',
    headers: {
        Authorization: 'Token token=' + staticAppData.userData.user.token,
      },
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function () {
    console.log('you are loged out!');
  })
  .fail(logRequestError);
};

let changePw = function(event) {
  event.preventDefault();                   // Stops page Reload
  let item = new FormData(event.target);    // object containing the FormData
  $.ajax({
    url: staticAppData.baseUrl + '/change-password/' + staticAppData.userData.user.id,
    type: 'PATCH',
    headers: {
        Authorization: 'Token token=' + staticAppData.userData.user.token,
      },
    contentType: false,                     // Needed for FormData
    processData: false,                     // Needed for FormData This is because item
    data: item                              // item is referancing the new object called 'item'.
  })
  .done(function () {
    console.log('you have changed your password');
  })
  .fail(logRequestError);
};

let init = function() {
  $('#register').on('submit', register);
  $('#logIn').on('submit', logIn);
  $('#logOut').on('submit', logOut);
  $('#changePw').on('submit', changePw);
  console.log(staticAppData);

};

$(document).ready(init);
module.exports = true;
