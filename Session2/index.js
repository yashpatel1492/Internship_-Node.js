var http = require("http");
var uc = require("upper-case");
const ip = require("readline-sync");
http.createServer(function(req, res){

    // demo code done in session about uppercase npm package
    /*var str = "Shashank Shah.\nBackend Developer.";
    res.writeHead(200,{'content-Type':'text/html'});
    res.write(uc.upperCase(str));
    res.end();
    */

    // Q1 --> about age determination
    /*var age=20;
    if (age>18) {
        res.write("You are mature.");
        res.end();
    } else {
        res.write("Yoe are child.");
        res.end();
    }
    */

    // Q2 --> Array Operations
    var arr = ['Object', 'Array', 'String', 'Integer', 'Float', 'Boolean'];
    for (const key of arr) {
        var str = "JavaScript type is: " + key;
        res.write(str);
        res.write("\n");
    }
    res.end();
    

    // Q3 --> switch case
    /*var choice = Number(ip.question("Enter Choice: "));
    switch (choice) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
                                                                                        
        default:
            console.log("Imagine it as Sunday.");
            break;
    }*/
}).listen(8080);