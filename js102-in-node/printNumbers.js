//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    PRINT NUMBERS
//---------------------------

// WHILE LOOP VERSION:

// var printNumbers = function (num1, num2) {
//     while (num1 <= num2) {
//         console.log(num1);
//         num1++;
//     }
// };


// FOR LOOP VERSION:

var printNumbers = function(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        console.log(i);
    }
};

exports.print = printNumbers;

// printNumbers(1, 10);