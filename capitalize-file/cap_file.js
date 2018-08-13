//===============================================
//               NODE EXERCISES
//===============================================

//-----------------------------------------------
//              READ A FILE
//-----------------------------------------------

var fs = require("fs");

var fileName = "file1.txt";

fs.readFile(fileName, "utf8", function (error, content) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(content.toUpperCase());
    }
});