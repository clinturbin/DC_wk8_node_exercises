//========================================= 
//      JavaScript 102 Exercises in Node
// ========================================

//----------------------------
//   Tic Tac Toe
//----------------------------

var ticTacToe = function (board) {
    /* First Row Match*/
    if ((board[0][0] === board[0][1] && board[0][0] === board[0][2])) {
        return board[0][0];
    }
    /* Middle Row Match*/
    else if ((board[1][0] === board[1][1] && board[1][0] === board[1][2])) {
        return board[1][0];
    }
    /* Last Row Match*/
    else if ((board[2][0] === board[2][1] && board[2][0] === board[2][2])) {
        return board[2][0];
    }
    /* First Column Match*/
    else if ((board[0][0] === board[1][0] && board[0][0] === board[2][0])) {
        return board[0][0];
    }
    /* Middle Column Match*/
    else if ((board[0][1] === board[1][1] && board[0][1] === board[2][1])) {
        return board[0][1];
    }
    /* Last Column Match*/
    else if ((board[0][2] === board[1][2] && board[0][2] === board[2][2])) {
        return board[0][2];
    }
    /* \ Diagonal Match*/
    else if ((board[0][0] === board[1][1] && board[0][0] === board[2][2])) {
        return board[0][0];
    }
    /* / Diagonal Match*/
    else if ((board[0][2] === board[1][1] && board[0][2] === board[0][1])) {
        return board[0][2];
    }
    else {
        return null;
    }
};

exports.ticTacToe = ticTacToe;

// var board = [
//     ['O', 'X', 'O'],
//     ['O', 'X', null],
//     [null, 'X', null]
//     ];

// console.log(ticTacToe(board));