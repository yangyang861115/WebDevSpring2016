/**
 * Created by yangyang on 3/5/16.
 */
module.exports = function(app, movieModel, userModel) {
    app.post("/api/project/user/:userId/movie/:imdbID", userLikesMovie);

    function userLikesMovie(req, res) {
        var movieOmdb = req.body;
        var userId = req.params.userId;
        var imdbID = req.params.imdbID;
        //movie obj => likes [usr1, usr3] id
        var movie = movieModel.findMovieByImdbID(imdbID);
        if (!movie) {
            movie = movieModel.createMovie(movieOmdb);
        }
        if(!movie.likes) {
            movie.likes = [];
        }
        movie.likes.push(userId);

        //user obj => likes [mv1, mv2] id
        var user = userModel.findUserById(userId);
        if(!user.likes) {
            user.likes = [];
        }
        user.likes.push(imdbID);
        res.send(200);
    }
}