'use strict';

let gameBoard = [
          [[],[],[]],
          [[],[],[]],
          [[],[],[]],
];

var setSquare = function(player, row, col) {
  checkerboard[row][col] = player;
}

var getPieceLocation = function(row, col) {
  var pieceType = gameBoard[row][col];
  return pieceType;
}

function resetBoard() {
  // Reset the board to null
  var boardRows = gameBoard.length;

  for (var i = 0; i < boardRows; i++) {
    for (var z = 0; z < boardRows; z++) {
      gameBoard[i][z] = null;
    }
  }
}
module.exports = true;
