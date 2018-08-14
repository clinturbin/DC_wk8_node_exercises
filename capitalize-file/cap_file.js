//===============================================
//               NODE EXERCISES
//===============================================

//-----------------------------------------------
//              READ A FILE
//-----------------------------------------------

var fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter file name: ", function (answer) {
    fs.readFile(answer, "utf8", function (error, content) {
        if (error) {
            console.log(error.message);
        } else {
            console.log(content.toUpperCase());
        }
    })
    rl.close();
});