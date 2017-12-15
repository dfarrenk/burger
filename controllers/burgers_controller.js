//Controller holds the appropriate routes

var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var handlebarsObject = {
            burgers: data
        };
        // console.log(handlebarsObject);
        res.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    // Abort on nameless burger.
    if (req.body.burgerName === "") {
        return location.reload();
    }
    burger.insertOne(req.body.burgerName, function(result) {
        // Send back the ID of the new quote
        console.log(result);
        res.redirect("/");
    });
});

// router.put("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     burger.update({
//         sleepy: req.body.sleepy
//     }, condition, function(result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         }
//         else {
//             res.status(200).end();
//         }
//     });
// });

// Export routes for server.js to use.
module.exports = router;
