//===============================================
//               NODE EXERCISES
//===============================================

//-----------------------------------------------
//              DNS LOOKUP
//-----------------------------------------------

var dns = require("dns");
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a domain name: ", function (answer) {
    dns.lookup(answer, function (error, address) {
        if (error) {
            console.log("Domain not found");
        }
        else {
            console.log("Domain Name: %s", answer);
            console.log("IP Address: %s", address);
        }
    });
    rl.close();
});


