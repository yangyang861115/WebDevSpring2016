/**
 * Created by yangyang on 3/8/16.
 */
var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

app.use(express.static(__dirname + "/public"));

//console.log(mongoose);
var CourseSchema = new mongoose.Schema({
    title: String,
    seats: {type: Number, default : 25},
    starts: {type: Date, default: Date.now()}
}, {collection: "course"});

var Course = mongoose.model("Course", CourseSchema);

function findByTitle(title, callback){
    Course.find({title: title}, callback);

}

function findAll(callback) {
    Course.find(callback);
}

function renderCourses(err, resultSet){
    for(var r in resultSet) {
        var title = resultSet[r].title;
        var seats = resultSet[r].seats;
        console.log([title, seats]);
    }
}

function createCourse(course) {
    Course.create(course, function(err, results){
        console.log(err);
        console.log(results);
    });
}



app.get('/rest/course', function(req, res){
    findAll(function (err, results) {
        res.json(results);
    });
});

app.listen(3000);

//var courses = [
//    {title: "course 1", seats: 11},
//    {title: "course 2", seats: 22}
//];
//
//for(var c in courses){
//    createCourse(courses[c]);
//}

//findByTitle("course 2", renderCourses);

//findAll(renderCourses);