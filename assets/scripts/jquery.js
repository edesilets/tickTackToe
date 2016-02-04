"use strict"

let gameFunctions = require('./gameBackend');

let count = 0;
let currentPlayer = 'x';

let createMove = function () {
  $('.gameboard').on('click', function () {
    gameFunctions.gameBoard[event.target.id] = currentPlayer;
    $(this).text(currentPlayer); // I DONT UNDERSTAND HOW 'this' IS WORKING.
    count++;
    //api.updateGame(index , currentplayer);
    //api push one move at a time
    currentPlayer = currentPlayer === 'x'  ? 'o' : 'x';
  });
};

module.exports = {
  createMove,
};
