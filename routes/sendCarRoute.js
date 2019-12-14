const express = require('express');
const body = require('body-parser');

const mongoose = require('mongoose');
const users = require('../models/users');
const alert = require('alert-node');

const sendCarRoute = express.Router();
sendCarRoute.use(body.json());


sendCarRoute.route('/')

.get((req,res,next) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);    
})


.post((req,res,next) =>{
    var plate = req.body.plateNum;
    var carname = req.body.carName;
    users.findById(userId)
    .then((result) =>{
        console.log(result);
        result.car.push({
            plateNum : plate,
            name : carname,
        })

        result.save()
        .then((result) => {
            res.json(result);
        }, (err) => next(err))
        .catch((err) => {
            console.log( "Error :    "+ err);
            console.log("These are result  : " + result);
            res.send('The name already exists');
            // res.redirect("/home.html");
        });
    })
    .catch((err) => res.send('Unable to save : ' + err));  
})


.put((req,res) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);

})

.delete((req, res) => {
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);
});

module.exports = sendCarRoute;