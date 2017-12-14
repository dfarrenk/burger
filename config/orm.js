// Import MySQL
var connection = require('../config/connection.js');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//     var arr = [];

//     // loop through the keys and push the key/value as a string int arr
//     for (var key in ob) {
//         var value = ob[key];
//         // check to skip hidden properties
//         if (Object.hasOwnProperty.call(ob, key)) {
//             // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//             // e.g. {sleepy: true} => ["sleepy=true"]
//             arr.push(key + "=" + value);
//         }
//     }

//     // translate array of strings to a single comma-separated string
//     return arr.toString();
// }

var orm = {
    selectall: function(callback) {
        connection.query("Select * FROM burgers", function(error, response) {
            if (error) throw error;
            callback(response);
        });
    },
    insertOne: function(burgerName, callback) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(error, response) {
            if (error) throw error;
            callback(response);
        });
    },
    updateOne: function() {

    }
};

module.exports = orm;


// View the table without having to keep reinitializing myphp
var Table = require('cli-table');

function afterConnection(query) {
    //Print burger table.
    // console.log(query);
    connection.query("SELECT * FROM burgers", function(err, res) {
        if (err) throw err;
        // instantiate
        var table = new Table({
            head: ['id', 'burger_name', 'devoured', 'date'],
            // colWidths: [50, 50]
        });
        for (let i in res) {
            table.push(
                [res[i].id, res[i].burger_name, res[i].devoured, res[i].date]
            );
        }
        console.log(table.toString());


        // table is an Array, so you can `push`, `unshift`, `splice` and friends
    });
}

// orm.selectall(afterConnection);
orm.insertOne("The Camelot", afterConnection);
