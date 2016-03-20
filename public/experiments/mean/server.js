/**
 * Created by yangyang on 3/20/16.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhiteBoardDB');

app.use(express.static(__dirname + "/public"));

var CourseSchema = new mongoose.Schema({
    title : String,
    seats: {type: Number, default: 25},
    starts: {type: Date, default: Date.now()}
}, {collection: "course"});

var Course = mongoose.model("Course", CourseSchema);



app.get("/rest/course", function(req, res){
    Course.find(function(err, data){
        res.json(data);
    });
})

app.get("/rest/course/:id", function(req, res){
    Course.find({_id: req.params.id}, function(err, data){
        res.json(data);
    });
})

app.delete("/rest/course/:id", function(req, res){
    Course.remove({_id: req.params.id}, function(err, result){
        Course.find(function(err, data){
            res.json(data);
        });
    });
})

app.post("/rest/course", function(req, res){
    var course = req.body;
    Course.create(course, function(err, data){
        Course.find(function(err, courses){
            res.json(courses);
        });
    })
})

app.put("/rest/course/:id", function(req, res){
    var course = req.body;
    Course.findOneAndUpdate({_id: req.params.id},
        {title: course.title, seats: course.seats, starts: course.starts},
        function(err, data){
            Course.find(function(err, data){
                res.json(data);
            });
    });
})

app.listen(3000);