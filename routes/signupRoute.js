const express = require('express');
const body = require('body-parser');

const mongoose = require('mongoose');
const users = require('../models/users');

const signupRoute = express.Router();
signupRoute.use(body.json());

signupRoute.route('/')


// the modified res is passed here
.get((req,res,next) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);
})


.post((req,res,next) =>{
    users.create(req.body)
    .then((user) =>{
        console.log(`users created : ${req.body}`);
        res.statusCode = 200;
        res.setHeader('Content-type',"application/json");
        console.log(user)
        res.redirect("./")
    }, (err) => next(err))
    .catch((err) => next(err))
    
})

.put((req,res) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);
})

.delete((req, res, next) => {
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);    
});

module.exports = signupRoute;
