//===============================================
//               NODE EXERCISES
//===============================================

//-----------------------------------------------
//              READ AND WRITE
//-----------------------------------------------

var fs = require("fs");
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Input File: : ", function (answer1) {
    rl.question("Output File: ", function (answer2) {
        readWrite(answer1, answer2);
        rl.close();
    })
});

var readWrite = function (inputFile, outputFile) {
    fs.readFile(inputFile, "utf8", function (error, content) {
        if (error) {
            console.log(error.message);
        }
        else {
            fs.writeFile(outputFile, content.toUpperCase(), function (error) {
                if (error) {
                    console.log(error.message);
                } else {
                    console.log("Input file: %s", inputFile);
                    console.log("Output file: %s", outputFile);
                    console.log("Wrote to file %s", outputFile);
                }
            })
        }
    });
};