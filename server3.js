/**
 * Created by yangyang on 3/8/16.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');

//console.log(mongoose);
var CourseSchema = new mongoose.Schema({
    title: String,
    seats: {type: Number, default : 25},
    starts: {type: Date, default: Date.now()}
}, {collection: "course"});

var Course = mongoose.model("Course", CourseSchema);

Course.create({title: "MongoDB", seats: 23}, function(err, results){
    console.log(err);
    console.log(results);
});

