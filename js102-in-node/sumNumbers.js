//======================================== 
//      JavaScript 102 Exercises in Node
// ======================================

//----------------------------
//    Sum the Numbers
//---------------------------

var sumNumbers = function (numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
};

exports.sumNumbers = sumNumbers;