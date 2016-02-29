/**
 * Created by yangyang on 2/29/16.
 */
(function(){
    module.exports = function(app){
        var movies = [
            {_id: "123asd", title: "Star Wars: Episode IV - A New Hope", director: "George Lucas"},
            {_id: "234dsa", title: "Star Trek Beyond", director: "Justin Lin"}
        ];

        app.get('/api/experiments/getmoives/movie', function(req, res){
            res.json(movies);
        });

        app.get('/api/experiments/getmoives/movie/:id', function(req, res){
            var id = req.params.id;
            for (var m in movies) {
                if (movies[m]._id === id) {
                    res.json(movies[m]);
                    return;
                }
            }
            res.json({message: "movie not found"});

        });

    };
})();