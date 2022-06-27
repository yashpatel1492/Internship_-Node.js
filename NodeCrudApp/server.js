const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const ck = require('ckey');

const app = express();

// dotenv.config();
// const port = ck.PORT || 5000;
// const port = process.env.PORT || 5000;
const port = 5000;
console.log(port);

// var port;
// const result = dotenv.config();
// if (result.error) {
//     throw result.error;
// }else{
//     port = process.env.PORT || 5000;
//     console.log(process.env.PORT);
// }

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.send("Hello World");
});

const employeeRoutes = require('./src/routes/employee.routes')
// using as middleware
app.use('/api/v1/employees', employeeRoutes)
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});