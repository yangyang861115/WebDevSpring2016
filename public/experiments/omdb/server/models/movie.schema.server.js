/**
 * Created by yangyang on 3/21/16.
 */
module.exports = function (mongoose) {

    var MovieSchema = mongoose.Schema({
        imdbID: String,
        title: String,
        poster: String,
        likes: [String],
        // list of users that like this movie
        userLikes: [
            {username: String}
        ],
    }, {collection: 'project.omdb.movie'});

    return MovieSchema;
}