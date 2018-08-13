//----------------------------
//    PRINT A BOX
//---------------------------

var printBox = function (width, height) {
    for (var i = 0; i < height; i++) {
        var str = '';
        for (var j = 0; j < width; j++) {
            if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
                str += '*';
            } 
            else {
                str += ' ';
            }
        }
        console.log(str);
    }
};
exports.printBox = printBox;

// printBox(10, 15);