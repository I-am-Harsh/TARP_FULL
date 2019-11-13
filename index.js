var express = require("express");
var app = express();
var port = 3000;

var logger = require('morgan');
var login = require('./routes/loginRoute');
var signup = require('./routes/signupRoute');
var sendCar = require('./routes/sendCarRoute');
var cookieParser = require('cookie-parser')  


var app = express();
app.use(cookieParser())
app.use(logger('dev'));

app.use(express.static('public'))
// app.use(express.static('css'));
// app.use(express.static('js'));
// app.use(express.static('fonts'));
// app.use(express.static('images'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db connect
const mongoose = require('mongoose');
const Users = require('./models/users');
const url = 'mongodb://localhost:27017/tarp';
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// cookie storing and session id
// app.use(session({
//   key: 'user_sid',
//   secret: 'lmao',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//       expires: 600000
//   }
// }));

// app.use((req, res, next) => {
//   if (req.cookies.user_sid && !req.session.user) {
//       res.clearCookie('user_sid');        
//   }
//   next();
// });


const connect = mongoose.connect(url)
connect.then( (db) =>{
  console.log("Server is connected succesfully");
  }, (err) =>{
    console.log(err);
});




app.use('/css',express.static(__dirname + "/public/css"));
app.use('/js',express.static(__dirname + "/public/js"));
app.use('/images',express.static(__dirname + "/public/images"));
app.use('/fonts',express.static(__dirname + "/public/fonts"));

app.use('/login',login);
app.use('/signup',signup);
app.use('/sendCar',sendCar);


app.listen(port, () => {
 console.log("Server listening on port " + port);
});