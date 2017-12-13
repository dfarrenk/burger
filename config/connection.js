var mysql = require("mysql");

//Database connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // afterConnection();
});


// // View the table without having to keep reinitializing myphp
// var Table = require('cli-table');

// function afterConnection() {
//     //Print burger table.
//     connection.query("SELECT * FROM burgers", function(err, res) {
//         if (err) throw err;
//         // instantiate
//         var table = new Table({
//             head: ['id', 'burger_name', 'devoured', 'date'],
//             // colWidths: [50, 50]
//         });

//         // table is an Array, so you can `push`, `unshift`, `splice` and friends
//         for (let i in res) {
//             table.push(
//                 [res[i].id, res[i].burger_name, res[i].devoured, res[i].date]
//             );
//         }
//         console.log(table.toString());
//     });
// }
