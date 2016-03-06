/**
 * Created by yangyang on 3/5/16.
 */
module.exports = function () {
    var movies = [];

    var api = {
        findMovieByImdbID: findMovieByImdbID,
        findMoviesByImdbIDs: findMoviesByImdbIDs,
        createMovie: createMovie
    };
    return api;

    function findMovieByImdbID(imdbID) {
        for (var m in movies) {
            if (movies[m].imdbID === imdbID) {
                return movies[m];
            }
        }
        return null;
    }

    function createMovie(movie) {
        var movie = {
            _id : "ID_" + (new Date()).getTime(),
            imdbID: movie.imdbID,
            poster: movie.Poster,
            title: movie.Title
        }
        movies.push(movie);
        return movie;
    }

    function findMoviesByImdbIDs(imdbIDs){
        var movies = [];
        for (var id in imdbIDs) {
            var movie = findMovieByImdbID(imdbIDs[id]);
            if (movie) {
                movies.push(movie);
            }
        }
        return movies;
    }
};