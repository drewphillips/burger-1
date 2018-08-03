var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    update: function (condition, cb){
        orm.update(condition,function(res){
            cb(res);
        });
    }
}


module.exports = burger;