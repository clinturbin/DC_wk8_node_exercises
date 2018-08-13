//===================================== 
//      JavaScript 102 Exercises
// ===================================

//----------------------------
//    Long Vowels
//---------------------------

var vowels = ["a", "e", "i", "o", "u"];

var longLongVowels = function (message, vowelLength) {
    var lowerMessage = message.toLowerCase();
    var newMessage = '';
    for (var i = 0; i < message.length; i++) {
        if (vowels.includes(lowerMessage[i]) && lowerMessage[i] === lowerMessage[i +1]) {
            for (var j = 0; j < vowelLength; j++) {
                newMessage += lowerMessage[i];
            }
            i++;
        }
        else {
            newMessage += lowerMessage[i];
        }
    }
    return newMessage;
};

exports.longVowels = longLongVowels;

// var message = 'Heelo Woorld!';
// var longVowelSize = 5;
// console.log(longLongVowels(message, longVowelSize));