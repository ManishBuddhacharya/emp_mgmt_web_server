let mysql = require('mysql');
let config = require('../knexfile');

let conn = mysql.createConnection(config.connection);
const knex = require('knex')(config);


function insertEmployee(request, response) {
    knex('employee')
        .insert({
            name: request.body.name,
            address: request.body.address,
            salary: request.body.salary,
            age: request.body.age
        }).then(data => {
            response.json({
                status: "ok"
            })
        }).catch(error => {
            console.log(error);
            response.json({
                status: "error"
            });
        })
}

function fetchEmployee(request, response) {
    knex.select('*').from('employee').
    then(data => {
        response.json({
            data: data
        })
    }).catch(error => {
        console.log(error);
        response.json({
            status: "error"
        });
    })
}

function updateEmployee(request, response) {
    knex('employee')
        .where({ id: request.body.empId })
        .update({
            name: request.body.name,
            address: request.body.address,
            salary: request.body.salary,
            age: request.body.age
        })
        .then(data => {
            response.json({
                status: "updated"
            })

        })
        .catch(error => {
            console.log(error);
            response.json({
                status: "error"
            });
        })
}

function deleteEmployee(request, response) {
    knex('employee')
        .where('id', request.body.empId)
        .del()
        .then(data => {
            response.json({
                status: "deleted"
            })

        })
        .catch(error => {
            console.log(error);
            response.json({
                status: "error"
            });
        })
}



module.exports = {
    "insertEmployee": insertEmployee,
    "updateEmployee": updateEmployee,
    "deleteEmployee": deleteEmployee,
    "fetchEmployee": fetchEmployee
}