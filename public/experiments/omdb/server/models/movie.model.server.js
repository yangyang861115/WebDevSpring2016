/**
 * Created by yangyang on 3/5/16.
 */
module.exports = function (db, mongoose) {
    var MovieSchema = require("./movie.schema.server.js")(mongoose);
    var Movie = mongoose.model("Movie", MovieSchema);

    var movies = [];
    var api = {
        findMovieByImdbID: findMovieByImdbID,
        findMoviesByImdbIDs: findMoviesByImdbIDs,
        createMovie: createMovie
    };
    return api;

    function findMoviesByImdbIDs(imdbIDs) {
        var movies = [];
        for (var id in imdbIDs) {
            var movie = findMovieByImdbID(imdbIDs[id]);
            if (movie) {
                movies.push(movie);
            }
        }
        return movies;
    }

    function createMovie(movie) {
        var movie = new Movie({
            imdbID: movie.imdbID,
            poster: movie.Poster,
            title: movie.Title
        });
        movie.save(function (err, doc) {
            console.log(doc);
        });
    }

    function findMovieByImdbID(imdbID) {
        for (var m in movies) {
            if (movies[m].imdbID === imdbID) {
                return movies[m];
            }
        }
        return null;
    }
}