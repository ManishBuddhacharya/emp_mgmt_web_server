const Express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');


// create an express instance/object
const express = new Express();
express.use(cors());
express.use(bodyParser.json());
express.options('*', cors());

const employee = require('./handlers/employeeHandler');

// create a route handler
function rootHandler(request, response) {
    response.json({ "test": "OK" });
}



// create new user
express.post('/employee', employee.insertEmployee);
express.get('/employee', employee.fetchEmployee);
express.put('/employee', employee.updateEmployee);
express.delete('/employee', employee.deleteEmployee);


// mount the handler to the route
express.get('/test', rootHandler);

// listen for connection
express.listen(3000, 'localhost', () => console.log("successfully running on 3000 port"));
