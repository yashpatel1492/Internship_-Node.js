var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "groovy_session3"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
    // Database creation
    // con.query("CREATE DATABASE groovy_session3", function(err, result){
    //     if(err) throw err;
    //     console.log("Database Created!");
    // })

    // Table Creation
    /*var sqlCreateTable = "CREATE TABLE session3 (name VARCHAR(255), address VARCHAR(255))";
    con.query(sqlCreateTable, function(err, result){
        if(err) throw err;
        console.log("Table Created!");
    })
    */

    // Inserting record into table
    /*var sqlInsertData = "INSERT INTO session3 (name, address) VALUES ('Shashank', 'Nadiad')";
    con.query(sqlInsertData, function(err, result){
        if(err) throw err;
        console.log("Data Inserted!");
    })
    */

    // Fetching Data from database
    var sqlFetchData = "SELECT * FROM session3";
    con.query(sqlFetchData, function(err, result){
        if(err) throw err;
        console.log(result);
    })
})