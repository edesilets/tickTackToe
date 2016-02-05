"use strict"

let gameFunctions = require('./gameBackend');

let count = 0;
let currentPlayer = 'x';
let score = {
  playerXWins: 0,
  playerXLoss: 0,
  playerOWins: 0,
  playerOLoss: 0,
  tie : 0
}

let postScoreBoard = function () {
  console.error('postScoreBoard');
  $('#xwins').text(score.playerXWins);
  $('#xloss').text(score.playerXLoss);
  $('#owins').text(score.playerOWins);
  $('#oloss').text(score.playerOLoss);
}

let createMove = function () {
  $('.gameboard').on('click', function () {
      if ($(this).text() === '') {
        gameFunctions.gameBoard[event.target.id] = currentPlayer;
        $(this).text(currentPlayer); // I DONT UNDERSTAND HOW 'this' IS WORKING.
        count++;
        //api.updateGame(index , currentplayer);
        //api push one move at a time
        let oppWinner = currentPlayer === 'x' ? 'o' : 'x';
        if (gameFunctions.checkWinner(currentPlayer)) { // || gameFunctions.checkWinner(oppWinner)
          currentPlayer === 'x' ? score.playerXWins++ : score.playerOWins++;
          currentPlayer === 'x' ? score.playerOLoss++ : score.playerXLoss++;
          confirm(currentPlayer + ' has won!');
          return;
        }
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
      } else {
        confirm('sorry someone is all ready here!');
    }
  });
};

module.exports = {
  createMove,
  postScoreBoard,
  score
};
