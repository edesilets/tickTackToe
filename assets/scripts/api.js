'use strict';

const staticAppData = {
  baseUrl : 'http://tic-tac-toe.wdibos.com',
  loginStatus : false
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
  return false;
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
    //console.log('api login data',data);
    staticAppData.userData = data;
    staticAppData.loginStatus = true;
    createGame();
    getUserGames();
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
    alert('you are loged out!');
    staticAppData.loginStatus = false;
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
    alert('you have changed your password');
  })
  .fail(logRequestError);
};
/* ------------------- LOG IN OUT OR REGISTER  API --------------------------------------------*/

let createGame = function() { //sighn in done and when new game is created.
  $.ajax({
    url: staticAppData.baseUrl + '/games',
    type: 'POST',
    headers: {
      Authorization: 'Token token=' + staticAppData.userData.user.token,
    },
    data: {}
  })
  .done(function(data){
    staticAppData.gameData = data.game;
    //console.log('api createGame: ',staticAppData.gameData);
  })
  .fail(logRequestError);
};

let updateGame = function(player, index){ /// put index and player
  $.ajax({
    url: staticAppData.baseUrl + '/games/' + staticAppData.gameData.id,
    type: 'PATCH',
    headers: {
      Authorization: 'Token token=' + staticAppData.userData.user.token,
    },
    data: {
      "game": {
        "cell": {
          "index": index,
          "value": player,
        },
      // "over": true
      }
    }
  })
  .done(function(data){
    staticAppData.gameData = data.game;
    //console.log('api updateGame', staticAppData.gameData);
  })
  .fail(logRequestError);
};

let showGame = function(){ // put index and player
    $.ajax({
      url: staticAppData.baseUrl + '/games/' + staticAppData.gameData.id,
      type: 'GET',
      headers: {
        Authorization: 'Token token=' + staticAppData.userData.user.token,
      },
      data: {}
    })
    .done(function(data){
      staticAppData.gameData = data.game;
      //console.log('api show data', staticAppData.gameData.player_x.email);
      $('#oldplayersemail').html(staticAppData.gameData.player_x.email);
    })
  .fail(logRequestError);
  };

  let getUserGames = function(){ // put index and player
    $.ajax({
      url: staticAppData.baseUrl + '/games',
      type: 'GET',
      headers: {
        Authorization: 'Token token=' + staticAppData.userData.user.token,
      },
      data: {}
    })
    .done(function(data){
      //console.log('api user games',data);
      //console.log(data.games.length);
      $('#gameCounter').html(data.games.length);
    })
    .fail(logRequestError);
  };

module.exports = {
staticAppData,
register,
logIn,
logOut,
changePw,
createGame,
updateGame,
showGame,
getUserGames
};
