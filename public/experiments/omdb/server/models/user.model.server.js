/**
 * Created by yangyang on 3/3/16.
 */
var mock = require("./user.mock.json");

var q = require('q');

module.exports = function (db, mongoose) {
    //load user schema
    var UserSchema = require("./user.schema.server.js")(mongoose);

    //create user model from schema
    var UserModel = mongoose.model('User', UserSchema);

    var api = {
        findUserByCredentials: findUserByCredentials,
        createUser: createUser,
        findUserById: findUserById,
        findUsersByIds: findUsersByIds
    };
    return api;

    function findUsersByIds(userIds) {
        var deferred = q.defer();

        // find all users in array of user IDs
        UserModel.find({
            _id: {$in: userIds}
        }, function (err, users) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function findUserById(userId) {
        var deffered = q.defer();
        UserModel.findById(userId, function (err, doc) {
            if (err) {
                deferred.reject(user);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function createUser(user) {
        //use q to defer the response
        var deferred = q.defer();
        UserModel.create(user, function (err, doc) {
            if (err) {
                deferred.reject(user);
            } else {
                deferred.resolve(doc);
            }
        });

        return deferred.promise;
    }

    function findUserByCredentials(credentials) {
        var deferred = q.defer();
        UserModel.findOne(
            {
                username: credentials.username,
                password: credentials.password
            },
            function (err, doc) {
                if (err) {
                    deferred.reject(user);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }
}