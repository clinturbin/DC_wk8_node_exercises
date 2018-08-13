//========================================= 
//      JavaScript 102 Exercises in Node
// ========================================

//----------------------------
//   Rock Paper Scissors
//----------------------------

var throws = {
    0: 'Rock',
    1: 'Paper',
    2: "Scissors"
};

var playerChoice = function () {
    var key = Math.floor(Math.random() * Math.floor(3));
    return throws[key];
};

var rockPaperScissors = function (player1Choice, player2Choice) {
    console.log(`Player 1: ${player1Choice}.`);
    console.log(`Player 2: ${player2Choice}.`);
    if (player1Choice === player2Choice) {
        console.log('Tie Game');
    }
    else if ((playerChoice === 'Rock' && player2Choice === 'Scissors') ||
               (player1Choice === 'Scissors' && player2Choice === 'Paper') ||
               (player1Choice === 'Paper' && player2Choice === 'Rock')) {
        console.log('Player 1 Wins!');
    }
    else {
        console.log('PLayer 2 wins!');
    }
};

exports.playerChoice = playerChoice;
exports.rockPaperScissors = rockPaperScissors;

// var player1Choice = playerChoice();
// var player2Choice = playerChoice();

// rockPaperScissors(player1Choice, player2Choice);