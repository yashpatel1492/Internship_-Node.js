var mysql = require('mysql');
var http = require('http');
var fs = require('fs');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "groovy_session3"
});

http.createServer(function(req,res){
    fs.readFile("index.html",function(error, result){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(result);
        res.end();
    })
}).listen(8050);


con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    // var sqlFetchData = "SELECT * FROM session3";
    // con.query(sqlFetchData, function(err, result){
    //     if(err) throw err;
    //     console.log(result);
    // })
})