'use strict';

const gameBoard = ['x','x','x',3,4,5,6,7,8];

let winnerDIA = function(player, array) {                 // See if possible to simplify more!
  let error = console.log('No Winning Diagnoal found.');
  let count = 0;

  for (let i = 0; i < array.length; i += 4) {
    if (array[i] === player) {
      count++;
    }
    if (count === 3) {

      return player;
    }
  }

  count = 0;

  for (let i = 2; i < array.length; i += 2) {
    if (array[i] === player) {

      count++;
    }
    if (count === 3) {

      return player;
    }
  }
  return error;
};

let winnerHorz = function(player, array) {           // simplify !!!!!
  let error = console.log('No in line winners.');
  let count = false;
  //array inc for expantion use it insed for I so each iteration increases.
  for (let i = 0; i <= 2; i++) {
    if (array[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }
  for (let i = 3; i <= 5; i++) {
    if (array[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }
  for (let i = 6; i <= 8; i++) {
    if (array[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }
}

const rowWinner = function (startIndex, endIndex, array, player) {
  let count = false;
  for (let i = startIndex; i <= endIndex; i++) {
    if (array[i] === player) {
      count++;
    }
    if (count === 3) {
      return player;
    }
  }
}

const setSquare = function(player, row, col) {
  gameBoard[row][col] = player;
};

const getPieceAt = function(row, col) {
  let pieceType = gameBoard[row][col];
  return pieceType;
};

const resetBoard = function() {
  // Reset the board to null
  const boardRows = gameBoard.length;

  for (let i = 0; i < boardRows; i++) {
    for (let z = 0; z < boardRows; z++) {
      gameBoard[i][z] = null;
    }
  }
}

module.exports = {
  setSquare: setSquare,
  getPieceLocation: getPieceLocation,
  resetBoard: resetBoard
};
