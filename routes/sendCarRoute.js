const express = require('express');
const body = require('body-parser');

const mongoose = require('mongoose');
const users = require('../models/users');
const alert = require('alert-node');

const sendCarRoute = express.Router();
sendCarRoute.use(body.json());

// const loginRoute = require('./loginRoute'); 
// var email = loginRoute.userEmail;

sendCarRoute.route('/')


// the modified res is passed here
.get((req,res,next) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);    

})


.post((req,res) =>{
    res.statusCode = 200;
    // console.log(email);
    console.log(userId);
    console.log(req.body);

    // users.findByIdAndUpdate()

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