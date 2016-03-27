/**
 * Created by yangyang on 3/21/16.
 */
module.exports = function(mongoose) {

    var MovieSchema = mongoose.Schema({
        imdbID: String,
        title: String,
        poster: String
    }, {collection: 'project.omdb.movie'});

    return MovieSchema;
}