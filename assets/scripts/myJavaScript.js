'use strict';

const gameBoard = [
  ['X','O','O'],
  ['X','X','X'],
  ['O','O','O']
];

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
debugger;

module.exports = {
  setSquare: setSquare,
  getPieceLocation: getPieceLocation,
  resetBoard: resetBoard
};
