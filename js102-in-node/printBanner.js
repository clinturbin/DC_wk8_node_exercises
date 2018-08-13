//----------------------------
//    PRINT A BANNER
//---------------------------

var printBanner = function (text) {
    var width = text.length + 4
    for (var i = 0; i < 3; i++) {
        var str = '';
        for (var j = 0; j < width; j++) {
            if (i === 0 || i === 2 || j === 0 || j === width - 1) {
                str += '*';
            }
            else if (i === 1 && (j === 1 || j === width - 2)) {
                str += ' ';
            }
            else {
                str += text[j - 2];
            }
        }
        console.log(str);
    }
};

exports.printBanner = printBanner;

// printBanner('Welcome to Digital Crafts');