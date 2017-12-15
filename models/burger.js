var orm = require("../config/orm.js");

var burger = {
    // retrieve entire table
    selectAll: function(callback) {
        orm.selectAll(function(response) {
            callback(response);
        });
    },
    // add a burger
    insertOne: function(burgerName, callback) {
        orm.insertOne(burgerName, function(response) {
            callback(response);
        });
    },
    // set a burger to devoured
    updateOne: function(burgerID, callback) {
        orm.updateOne(burgerID, function(response) {
            callback(response);
        });
    }
};

module.exports = burger;
