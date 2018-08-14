//===============================================
//               NODE EXERCISES
//===============================================

//-----------------------------------------------
//              READ AND WRITE
//-----------------------------------------------

var fs = require("fs");

var inputFile = "file1.txt";
var outputFile = "cap.txt";

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