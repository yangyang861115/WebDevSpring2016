var express = require('express');
var app = express();

//app.get('/', function(req, res){
//  res.send('hello world');
//});

app.get('/api/users', function(req, res){
  var users = [{username: 'alice', first: 'Alice', last: 'Wonderland'},
               {username: 'bob', first: 'Bob', last: 'Hope'}
  ];
  res.json(users);
 });

app.use(express.static(__dirname + '/public'));
var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;


app.listen(port, ipaddress);
//app.listen(3000);
