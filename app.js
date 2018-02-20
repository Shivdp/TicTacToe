const prompt = require('prompt'); 

var TicTacToe = function() {
  this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]; 

}

TicTacToe.prototype.isWinner = function(player) {
  return (isRowWinner(player) || isColWinner(player) || isDiagWinner(player)); 
}

TicTacToe.prototype.isRowWinner = function(player) {
  return checkMoves(player, 0, 1, 2) || checkMoves(player, 3, 4 ,5)  || checkMoves(player, 6, 7, 8); 
}

TicTacToe.prototype.isColWinner = function(player) {
  return checkMoves(player, 0, 3, 6) && checkMoves(player, 1, 4, 7) && checkMoves(player, 2, 5, 8)
}

TicTacToe.prototype.isDiagWinner = function(player) {
  return checkMoves(player, 0, 4, 8) && checkMoves(player, 2, 4, 6)
}

TicTacToe.prototype.checkMove = function(player, i) {
  return this.board[i] === player; 
}

TicTacToe.prototype.checkMoves = function(player, i, j, k) {
  return checkMove(player, i) && checkMove(player, j) && checkMove(player, k); 
}

TicTacToe.prototype.drawBoard = function() {
  console.log(this.board[0], this.board[1], this.board[2])
  console.log(this.board[3], this.board[4], this.board[5])
  console.log(this.board[6], this.board[7], this.board[8])

}

TicTacToe.prototype.playGame = function () {
  this.drawBoard(); 
}


let ttt = new TicTacToe(); 
ttt.playGame(); 