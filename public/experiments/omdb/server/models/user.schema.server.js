/**
 * Created by yangyang on 3/21/16.
 */
module.exports = function(mongoose){
    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        roles: [String]
    }, {collection: 'project.omdb.user'});

    return UserSchema;
};