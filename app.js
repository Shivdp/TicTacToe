const prompt = require('prompt'); 

var TicTacToe = function() {
  this.board = [0, 1, 2, 3, 4, 5, 6, 7, 8]; 
  this.moves = 0; 
  this.player = 'O'; 
}

TicTacToe.prototype.isWinner = function(player) {
  return (this.isRowWinner(player) || this.isColWinner(player) || this.isDiagWinner(player)); 
}

TicTacToe.prototype.isRowWinner = function(player) {
  return this.checkMoves(player, 0, 1, 2) || this.checkMoves(player, 3, 4 ,5)  || this.checkMoves(player, 6, 7, 8); 
}

TicTacToe.prototype.isColWinner = function(player) {
  return this.checkMoves(player, 0, 3, 6) || this.checkMoves(player, 1, 4, 7) || this.checkMoves(player, 2, 5, 8)

}

TicTacToe.prototype.isDiagWinner = function(player) {
  return this.checkMoves(player, 0, 4, 8) || this.checkMoves(player, 2, 4, 6)
}

TicTacToe.prototype.checkMove = function(player, i) {
  return this.board[i] === player; 
}

TicTacToe.prototype.checkMoves = function(player, i, j, k) {
  return this.checkMove(player, i) && this.checkMove(player, j) && this.checkMove(player, k); 
}

TicTacToe.prototype.drawBoard = function() {
  console.log(this.board[0], this.board[1], this.board[2])
  console.log(this.board[3], this.board[4], this.board[5])
  console.log(this.board[6], this.board[7], this.board[8])
}

TicTacToe.prototype.togglePlayer = function() {
  if (this.player === 'O') {
    this.player = 'X';
  } else {
    this.player = 'O'
  }
}

TicTacToe.prototype.togglePiece = function(i) {
  this.board[i] = this.player; 
  this.moves++; 
}

TicTacToe.prototype.checkMove = function(move) {
  move = Number(move); 
  if (move >= 0 && move <= 8 && this.board[move] === move ) {
    return true; 
  } else return false; 
}

TicTacToe.prototype.playGame = function () {
  this.drawBoard(); 
  let promptQuestion = `Please pick a move between 0-8, player "${this.player}"`; 
    prompt.get(promptQuestion, (err, move) => {
      if (this.checkMove(move[promptQuestion])) {
        this.togglePiece(Number(move[promptQuestion])); 
        if (this.isWinner(this.player)) {
          console.log(`Player ${this.player} WINS!`)
        } else if (this.moves === 9) {
          console.log("TIE")
        } else {
          this.togglePlayer(); 
          this.playGame(); 
        }
      } else {
        console.log('ERROR, please only enter a move between 0 and 8 that has not already been played')
        this.playGame(); 
      }
    })
    
}

let game = new TicTacToe(); 
game.playGame(); 