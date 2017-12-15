// Import MySQL
var connection = require('../config/connection.js');

var orm = {
    // fetch whole table
    selectAll: function(callback) {
        connection.query("SELECT * FROM burgers", function(error, response) {
            if (error) throw error;
            callback(response);
        });
    },
    // add a burger
    insertOne: function(burgerName, callback) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], function(error, response) {
            if (error) throw error;
            callback(response);
        });
    },
    // devour a burger
    updateOne: function(burgerID, callback) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = " + burgerID, function(error, response) {
            if (error) throw error;
            callback(response);
        });
    }
};

module.exports = orm;
