const path = require('path');
// module.exports = {
//     client: 'sqlite3',
//     connection: {
//         filename: 'storage.sqlite'
//     },
//     migrtion: {
//         tableName: 'migrations',
//         directory: path.resolve(__dirname, './migrations'),
//     },
//     useNullAsDefult: true,
// }
module.exports = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'contacts'
    },
    migrtion: {
        tableName: 'migrations',
        directory: path.resolve(__dirname, './migrations'),
    },
    useNullAsDefult: true,
}

