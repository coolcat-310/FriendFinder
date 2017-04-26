/**
 * Created by juancarlosnavarrete on 4/25/17.
 */
var express = require("express");
var path = require("path");
var buddy = require("../data/friends.js");


module.exports = function(app){


    app.get('/api/friends', function(req, res){
        res.json(buddy);
    });

    app.post("/api/new", function(req, res) {
        var newClient = req.body;
        var myScore = newClient.scores;
        var total = 0;
        var bestMatch = 100;
        var index = -1;

        for(var j=0; j< buddy.length; j++){
            //Iterate through the whole list of friends
            total = 0;

            for(var i =0; i< myScore.length; i++){
                //for each friend calculate the total value
                var dif = Math.abs(myScore[i] - buddy[j].scores[i]);
                total += dif;
            }

            if(total < bestMatch){
                bestMatch = total;
                index = j;
            }

        }

        console.log('best Choice', buddy[index]);
        buddy.push(newClient);
        res.json(buddy[index]);
    });
};