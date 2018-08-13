var sumNumbers = require("./sumNumbers");
var positiveNumbers = require("./positives");
var factors = require("./factorNumber");
var numbers = require("./printNumbers");
var square = require("./printSquare");
var printBox = require("./printBox");
var printBanner = require("./printBanner");
var longVowels = require("./longVowels");
var leet = require("./leet");
var addMatrix = require("./matrixAdd");
var multMatrix = require("./matrixMult");
var caesar = require("./caesar");
var ticTacToe = require("./ticTacToe");
var rockPaperScissors = require("./rockPaperScissors");


console.log(sumNumbers.sumNumbers([1, 4, 8]));
console.log (positiveNumbers.positiveNumbers([1, -1, -2, 2, 2]));
console.log(factors.factors(40));
numbers.print(1, 10);
square.print(5);
printBox.printBox(5, 5);
printBanner.printBanner('Welcome to Digital Crafts');
console.log(longVowels.longVowels('Heelo Woorld!', 5));
console.log(leet.leet('aegiost SUCCESS!'));

var matrix1 = [ [1, 2, 3, 4], [1, 2], [1, 2, 3], [1, 2, 3, 4] ];
var matrix2 = [ [3, 4, 5, 6], [5, 6], [5, 6, 7], [5, 6, 7, 8] ];
console.log(addMatrix.addMatrix(matrix1, matrix2));


var multMtrix1 = [ [2, 4], [3, 4] ]
var multMatrix2 = [ [5, 2], [3, 1] ]
console.log(multMatrix.multMatrix(multMtrix1, multMatrix2));

var message = 'Genius without education is like silver in the mine';
var offset = 13;
console.log(caesar.cipher(message, offset));

var board = [
    ['O', 'X', 'O'],
    ['O', 'X', null],
    [null, 'X', null]
    ];
console.log(ticTacToe.ticTacToe(board));

var player1Choice = rockPaperScissors.playerChoice();
var player2Choice = rockPaperScissors.playerChoice();
rockPaperScissors.rockPaperScissors(player1Choice, player2Choice);