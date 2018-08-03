var connection  = require("./connection.js");

var orm = {
    selectAll: function (cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString,
    function (err, result){
    if (err) throw err;
    cb(result)
    // console.log(result);
    })
    },
    // insertOne: function () {},
    update: function (condition , cb ){
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = " + condition;
        console.log(queryString)
        connection.query(queryString , function (err, result){
            if (err) throw err;
            cb(result);
        })
    },

    create: function (name, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (" + "'" + name + "'" + ");";
        console.log(queryString)
        connection.query(queryString , function (err, result){
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;