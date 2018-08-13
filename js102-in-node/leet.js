//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    Leetspeak
//---------------------------

var leet = {
    A: '4',
    E: '3',
    G: '6',
    I: '1',
    O: '0',
    S: '5',
    T: '7'
}

var leetspeak = function (message) {
    var upperMessage = message.toUpperCase();
    var newString = '';
    for (var i = 0; i < message.length; i++) {
        if (upperMessage[i] in leet) {
            newString += leet[upperMessage[i]] 
        }
        else {
            newString += upperMessage[i];
        }
    }
    return newString;
};

exports.leet = leetspeak;

// var message = 'aegiost SUCCESS!';
// console.log(leetspeak(message));