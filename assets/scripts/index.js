'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./gameBackend');
let api = require('./api');
let jq = require('./ui');

let init = function() {
  $('#register').on('submit', api.register);
  $('#logIn').on('submit', api.logIn);
  $('#logOut').on('submit', api.logOut);
  $('#changePw').on('submit', api.changePw);
  console.log(api.staticAppData);
  ui.createMove();
  ui.postScoreBoard();
};

$(document).ready(init);
