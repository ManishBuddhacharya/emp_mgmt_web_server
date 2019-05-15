const Express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');


// create an express instance/object
const express = new Express();
express.use(cors());
express.use(bodyParser.json());
express.options('*', cors());

const contact = require('./handlers/employeeHandler');

// create a route handler
function rootHandler(request, response) {
    response.json({ "test": "OK" });
}



// create new user
express.post('/contact', contact.insert);
express.get('/contact', contact.fetchContact);
// express.put('/contact', contact.updateContact);


// mount the handler to the route
express.get('/test', rootHandler);

// listen for connection
express.listen(3000, 'localhost', () => console.log("successfully running on 3000 port"));
