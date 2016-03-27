var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
// use remote connection string
var connectionString = 'mongodb://127.0.0.1:27017/cs5610fall2015exmpl1';

// if running in remote server
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}
// connect to the database
var db = mongoose.connect(connectionString);
var db2 = mongoose.connection;
db2.on('error', function(error){
    console.log("Error loading the db - "+ error);
});

db2.on('disconnected', function () {
    mongoose.connect(connectionString);
});


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(multer());// for parsing multipart/form-data
app.use(session({secret: process.env.PASSPORT_SECRET, resave: true, saveUninitialized: true}));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));
//app.get('/', function(req, res){
//  res.send('hello world');
//});

app.get('/api/users', function (req, res) {
    var users = [{username: 'alice', first: 'Alice', last: 'Wonderland'},
        {username: 'bob', first: 'Bob', last: 'Hope'}
    ];
    res.json(users);
});


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

require('./public/experiments/node/server.js')(app); //node courses
require('./public/experiments/getmovie/server/app.js')(app); //getmovie
require('./public/assignment/server/app.js')(app); //assignment
require('./public/experiments/omdb/server/app.js')(app, db, mongoose); // omdb project

app.listen(port, ipaddress);
//app.listen(3000);
