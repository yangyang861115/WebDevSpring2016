/**
 * Created by yangyang on 3/5/16.
 */
var q = require("q");
module.exports = function (db, mongoose) {
    var MovieSchema = require("./movie.schema.server.js")(mongoose);
    var Movie = mongoose.model("Movie", MovieSchema);

    var movies = [];
    var api = {
        findMovieByImdbID: findMovieByImdbID,
        findMoviesByImdbIDs: findMoviesByImdbIDs,
        createMovie: createMovie,
        userLikesMovie: userLikesMovie
    };
    return api;

    function findMoviesByImdbIDs(imdbIDs) {
        var deferred = q.defer();

        // find all movies
        // whose imdb IDs
        // are in imdbIDs array
        Movie.find({
            imdbID: {$in: imdbIDs}
        }, function (err, movies) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(movies);
            }
        })
        return deferred.promise;
    }

    function createMovie(movie) {
        // .create or (instance of obj and.save (create || update))
        //create instance of movie
        var movie = new Movie({
            imdbID: movie.imdbID,
            poster: movie.Poster,
            title: movie.Title,
            likes: []
        });
        var deferred = q.defer();
        //save movie to database
        movie.save(function (err, doc) {
            if (err) {
                deferred.reject(user);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findMovieByImdbID(imdbID) {
        var deferred = q.defer();
        Movie.findOne({imdbID: imdbID}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function userLikesMovie(userId, movie) {
        var deferred = q.defer();

        // find the movie by imdb ID
        Movie.findOne({imdbID: movie.imdbID},

            function (err, doc) {

                // reject promise if error
                if (err) {
                    deferred.reject(err);
                }

                // if there's a movie
                if (doc) {
                    // add user to likes
                    doc.likes.push(userId);
                    // save changes
                    doc.save(function (err, doc) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve(doc);
                        }
                    });
                } else {
                    // if there's no movie
                    // create a new instance
                    movie = new Movie({
                        imdbID: movie.imdbID,
                        title: movie.Title,
                        poster: movie.Poster,
                        likes: []
                    });
                    // add user to likes
                    movie.likes.push(userId);
                    // save new instance
                    movie.save(function (err, doc) {
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve(doc);
                        }
                    });
                }
            });
        return deferred.promise;
    }
}