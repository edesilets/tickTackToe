"use strict";

const gameFunctions = require('./gameBackend');
const api = require('./api');

let count = 0;
let currentPlayer = 'x';
const score = {
  playerXWins: 0,
  playerXLoss: 0,
  playerOWins: 0,
  playerOLoss: 0,
  tie : 0
};

const postScoreBoard = function () {
  console.log('score: ', score);
  $('#xwins').text(score.playerXWins);
  $('#xloss').text(score.playerXLoss);
  $('#owins').text(score.playerOWins);
  $('#oloss').text(score.playerOLoss);
  $('#ties').text(score.tie);
};

let createMove = function () {
  $('.gameboard').on('click', function () {
      if (count <= 8) {
        // this is referring to the selected DIV
        if ($(this).text() === '') {
          gameFunctions.gameBoard[event.target.id] = currentPlayer;
          $(this).text(currentPlayer); // I DONT UNDERSTAND HOW 'this' IS WORKING.
          count++;
          //console.log(gameFunctions.gameBoard);
          let oppWinner = currentPlayer === 'x' ? 'o' : 'x';
          if (gameFunctions.checkWinner(currentPlayer) || gameFunctions.checkWinner(oppWinner)) {
            currentPlayer === 'x' ? score.playerXWins++ : score.playerOWins++;
            currentPlayer === 'x' ? score.playerOLoss++ : score.playerXLoss++;
            confirm(currentPlayer + ' has won!');
            postScoreBoard();
            api.showGame();
            api.getUserGames(); // completed game count
            gameFunctions.gameBoardReset();
            api.createGame();
            console.log(gameFunctions.gameBoard);
            count = 0;
            return;
          }
          if (api.staticAppData.loginStatus) {
            api.updateGame(currentPlayer, event.target.id);
          }
          currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
          $('#currentturn').html(currentPlayer);
        } else {
          confirm('sorry someone is all ready here!');
      }
    } else {
      score.tie++;
      confirm('TIE!!!');
      postScoreBoard();
      gameFunctions.gameBoardReset();
      count = 0;
      return;
    }
  });
};

module.exports = {
  createMove,
  postScoreBoard,
  score
};
