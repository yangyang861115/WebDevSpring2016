/**
 * Created by yangyang on 2/28/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer(); // for parsing multipart/form-data

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var courses = [{'title': 'java', 'seat': 23, 'date' : new Date()},
    {'title': 'c#', 'seat': 40, 'date' : new Date(2015, 9, 4)},
    {'title': 'web', 'seat': 50, 'date' : new Date(2016, 1, 16)}];

app.get('/rest/course', function(req, res){
    res.json(courses);
});

app.get('/rest/course/:id', function(req, res){
    var index = req.params.id;
    res.json(courses[index]);
});

app.delete('/rest/course/:id', function(req, res){
    var index = req.params.id;
    courses.splice(index, 1);
    res.json(courses);//res.send(courses)
});

app.put('/rest/course/:id', function(req, res){
    var index = req.params.id;
    var course = req.body;
    courses[index].title = course.title;
    courses[index].seat = course.seat;
    courses[index].date = course.date;
    res.json(courses);
});

app.post('/rest/course', function(req, res){
    var course = req.body;
    courses.push(course);
    res.json(courses);
});
app.listen(3000);
