"use strict"

let gameFunctions = require('./gameBackend');

let count = 0;
let currentPlayer = 'x';

let createMove = function () {
  $('.gameboard').on('click', function () {
      if ($(this).text() === '') {
        gameFunctions.gameBoard[event.target.id] = currentPlayer;
        $(this).text(currentPlayer); // I DONT UNDERSTAND HOW 'this' IS WORKING.
        count++;
        //api.updateGame(index , currentplayer);
        //api push one move at a time
        currentPlayer = currentPlayer === 'x'  ? 'o' : 'x';
      } else {
        confirm('sorry someone is all ready here!');
    }
  });
};

module.exports = {
  createMove,
};
