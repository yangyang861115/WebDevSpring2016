/**
 * Created by yangyang on 3/3/16.
 */
module.exports = function(){
    var mock = require("./user.mock.json");

    var api = {
        findUserByCredentials: findUserByCredentials,
        createUser: createUser,
        findUserById : findUserById
    };
    return api;

    function findUserByCredentials(credentials){
        for (u in mock) {
            if(mock[u].username === credentials.username
                && mock[u].password === credentials.password) {
                return mock[u];
            }
        }
        return null;
    }

    function  createUser (user){
        //validation here
        user._id = "ID_" + (new Date()).getTime();
        mock.push(user);
        return user;
    }

    function findUserById(userId) {
        for (var u in mock) {
            if(mock[u]._id === userId) {
                return mock[u];
            }
        }
        return null;
    }
}