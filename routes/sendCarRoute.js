const express = require('express');
const body = require('body-parser');

const mongoose = require('mongoose');
const users = require('../models/users');
const alert = require('alert-node');

const sendCarRoute = express.Router();
sendCarRoute.use(body.json());

// var plate = req.body.plateNum;
// var carname = req.body.carName;

sendCarRoute.route('/')


// the modified res is passed here
.get((req,res,next) =>{
    res.statusCode = 403;
    res.end(`The ${req.method} was executed.  This operation is not supported.`);    

})
// users.findOneAndUpdate({'_id': `${userId}`})
// .post((req,res) =>{

//     console.log(userId);
//     console.log(req.body);

//     users.findOneAndUpdate({'_id': `${userId}`})
//     .then((result) =>{
//         res.statusCode = 200;
//         res.setHeader('Content-type',"application/json");
//         res.send(result);
        
        
//     }, (err) => next(err))
//     .catch((err) => next(err));
    
// })



// .post((req,res) =>{

//     users.findOne({'_id': `${userId}`})
//     .then((result) =>{
//         res.statusCode = 200;
//         res.setHeader('Content-type',"application/json");
//         res.send(result);
//         // return result
//     },
//     // .then((result) =>{
//     //     result.car.push({
//     //         plateNum : plate,
//     //         name : car 
//     //     })
//     //     return result.save();
//     // },
//      (err) => next(err))
//     .catch((err) => next(err));
    
// })

.post((req,res) =>{
    var plate = req.body.plateNum;
    var carname = req.body.carName;
    users.findOne({'_id': `${userId}`})
    .then((result) =>{
        res.statusCode = 200;
        res.setHeader('Content-type',"application/json");
        // res.send(result);
        result.car.push({
            plateNum : plate,
            name : carname,
            
        })
        res.send(result);
        result.save();
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

module.exports = sendCarRoute;