var http = require("http");
var fs = require("fs")
var str = "Shashank Shah.\nCyber Security Expert.\nBackend Developer."
http.createServer(function(req, res){

    // res.write("Hello World!");
    // res.end();

    //Demo code written in Groovy

    // fs.readFile("demo.html",function(error, result){
    //     res.writeHead(200,{'content-Type':'text/html'});
    //     res.write(result);
    //     res.end();

    // Writing in File as well as reading also
    
    fs.writeFile("D:/Internship Groovy/Session1/demo.txt", str, {flag: 'a'}, err => {});
    fs.readFile("demo.txt",function(error, result){
        res.writeHead(200,{'content-Type':'text/plain'});
        res.write(result);
        res.end();
    })


    // Star Pattern
    // let n = 5;
    // let string = "";
    // for (let i = 1; i <= n; i++) {
    //     for (let j = 0; j < i; j++) {
    //         string += "*";
    //     }
    // string += "\n";
    // }
    // res.write(string);
    // res.end();
}).listen(8080);