'use strict';

const gameBoard = [null,null,null,null,null,null,null,null,null]; // do not change array name all logic will break for functions

const checkWinner = function (player) {
  if (winnerDia(player)) {

    return true;
  } else if (winnerHorz(player)) {

    return true;
  } else if (winnerVert(player)) {

    return true;
  }
};

const winnerDia = function(player) {                 // See if possible to simplify more!
  let count = 0;

  for (let i = 0; i < gameBoard.length; i += 4) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return true;
    }
  }
  count = false;

  for (let i = 2; i < gameBoard.length; i += 2) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return true;
    }
  }

  return false;
};

const winnerHorz = function (player) {
  if (hozChecker(0,2,player)) {

    return true;
  } else if (hozChecker(3,5,player)) {

    return true;
  }else if (hozChecker(6,8,player)) {

    return true;
  } else {

    return false;
  }
};

const hozChecker = function (start, end, player) {
  let count = 0;

  for (let i = start; i <= end; i++) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
};

const winnerVert = function (player) {
  for (let i = 0; i <= 2; i++) {
    let verticalInc = i;
    let count = false;

    for (verticalInc; verticalInc <= gameBoard.length; verticalInc += 3) {
      if (gameBoard[verticalInc] === player) {
        count++;
      }
      if (count === 3) {
        return true;
      }
    }
  }
  return false;
};

const gameBoardReset = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = null;
  }
  debugger;
  $('.gameboard').empty();
};

const setSquare = function(player, place) {
  gameBoard[place] = player;
};

const getPieceAt = function(place) {
  let pieceType = gameBoard[place];
  return pieceType;
};

module.exports = {
 getPieceAt,
 setSquare,
 gameBoardReset,
 checkWinner,
 gameBoard,
};
