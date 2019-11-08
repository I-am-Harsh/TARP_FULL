const express = require('express');
const body = require('body-parser');

const mongoose = require('mongoose');
const users = require('../models/users');
const alert = require('alert-node');

const loginRoute = express.Router();
loginRoute.use(body.json());

loginRoute.route('/')


// the modified res is passed here
.get((req,res,next) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);    

})


.post((req,res) =>{

    var userEmail = req.body.email;
    var userPass = req.body.password;
    console.log(req.body);

    users.findOne({email : userEmail})
    .then((result) =>{
        res.statusCode = 200;
        res.setHeader('Content-type',"application/json");
        if(result !== null){
            // console.log(result.params.password);
        
            if(result.password === userPass){
                // res.json('This is correct password -- Logging in');
                // alert("This is correct password -- Logging in");
                // console.log('matched');
                return res.redirect("./home");
            }
            else{
                alert("This is the wrong password")
                return res.redirect("./");
            }
        }
        else{
            console.log("This is the wrong email")
            return res.redirect("./");
        }
    }, (err) => next(err))
    .catch((err) => next(err));
    
})

.put((req,res) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);
})

.delete((req, res) => {
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);
});




module.exports = loginRoute;
