'use strict';

const gameBoard = ['x','x','x',3,4,5,6,7,8];

let winnerDIA = function(player, array) {
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
