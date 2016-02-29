/**
 * Created by yangyang on 2/28/16.
 */
module.exports = function(app) {
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
};


