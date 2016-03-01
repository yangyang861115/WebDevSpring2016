var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));
//app.get('/', function(req, res){
//  res.send('hello world');
//});

app.get('/api/users', function(req, res){
  var users = [{username: 'alice', first: 'Alice', last: 'Wonderland'},
               {username: 'bob', first: 'Bob', last: 'Hope'}
  ];
  res.json(users);
 });


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

require('./public/experiments/node/server.js')(app); //node courses
require('./public/experiments/getmovie/server/app.js')(app); //getmovie
require('./public/assignment/server/app.js')(app); //assignment
app.listen(port, ipaddress);
//app.listen(3000);
