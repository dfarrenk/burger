var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll(function(response) {
            callback(response);
        });
    },
    insertOne: function(burgerName, callback) {
        orm.insertOne(burgerName, function(response) {
            callback(response);
        });
    },
    updateOne: function() {

    }
};

module.exports = burger;
// var orm = require("../config/orm");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   create: function(name, cb) {
//     orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
//   },
//   update: function(id, cb) {
//     var condition = "id=" + id;
//     orm.update("burgers", {
//       devoured: true
//     }, condition, cb);
//   }
// };

// module.exports = burger;
