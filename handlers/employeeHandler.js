let mysql = require('mysql');
let config = require('../knexfile');

let conn = mysql.createConnection(config.connection);
const knex = require('knex')(config);


function insert(request, response) {
    // insert statment
    // let sql = `INSERT INTO user
    //        VALUES(2,'Manish','Buddhacharya','9860870651','Balaju')`;

    // // execute the insert statment
    // conn.query(sql);

    // conn.end();

    knex('user')
        .insert({
            id: 6,
            first_name: 'Anish',
            last_name: 'Buddhacharya',
            contact: '984115515',
            address: 'balaju'
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

function fetchContact(request, response) {
    knex.select('*').from('user').
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

function updateContact(request, response) {
    knex('users')
        .where({ id: 1 })
        .update({
            first_name: 'Anish',
            last_name: 'Anish',
            contact: '987456321',
            address: 'sydney'
        })
        .then(data => {
        	console.log(response);
            
        })
        .catch(error => {
            console.log(error);
            response.json({
                status: "error"
            });
        })
}



module.exports = {
    "insert": insert,
    "update": updateContact,
    "fetchContact": fetchContact
}