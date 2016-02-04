'use strict';

const gameBoard = ['x','x','x',3,'x',5,6,'x',8]; // do not change array name all logic will break for functions

const checkWinner = function (player) {
  if (winnerDia(player)) {

    return player;
  } else if (winnerHorz(player)) {

    return player;
  } else if (winnerVert(player)) {

    return player;
  }
}

const winnerDia = function(player) {                 // See if possible to simplify more!
  let count = 0;

  for (let i = 0; i < gameBoard.length; i += 4) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }

  count = 0;

  for (let i = 2; i < gameBoard.length; i += 2) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }
  return false;
};

const winnerHorz = function(player) {           // simplify !!!!!
  let error = console.log('No in line winners.');
  let count = false;
  //array inc for expantion use it insed for I so each iteration increases.
  for (let i = 0; i <= 2; i++) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }
  for (let i = 3; i <= 5; i++) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }
  for (let i = 6; i <= 8; i++) {
    if (gameBoard[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
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
        return player;
      }
    }
  }
  return false;
};

const gameBoardReset = function () {
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = null;
  }
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
