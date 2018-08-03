var express = require("express");

var burger = require ("../models/burgers.js");
var router = express.Router();



router.get("/", function (req,res){
    console.log("?????")
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        console.log("jaslfksf" + data);
        res.render("index", hbsObject);
        
    })
})

router.put("/api/burgers/:id", function (req, res){
    var condition =  req.params.id;
    console.log("condition", condition);
    console.log(req.body);
    burger.update( condition, function (result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    })
})


module.exports = router;