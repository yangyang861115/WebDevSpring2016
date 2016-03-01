/**
 * Created by yangyang on 2/29/16.
 */
module.exports = function() {
    /*Implement CRUD operations described in the general requirements
     findUserByUsername(username) - returns a single user whose username is equal to username parameter, null otherwise
     findUserByCredentials(credentials) - accepts an object credentials with properties username and password. Returns a single user from the model whose username and password are equal to the username and password properties in the credentials parameter, null otherwise
    */
    var users = require('./user.mock.json');
    var api = {
        createUser: createUser,
        findAllUsers: findAllUsers,
        findUserById: findUserById,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,
        updateUser: updateUser,
        deleteUser: deleteUser,
    };
    return api;

    function createUser(user){
        var now = new Date();
        user._id = "id" + now.getTime();
        users.push(user);
        return user;
    }

    function findAllUsers() {
        return users;
    }

    function findUserById(id) {
        for (var u in users) {
            if (users[u]._id === id) {
                return users[u];
            }
        }
        return null;
    }

    function findUserByUsername(username) {
        //returns a single user whose username is equal to
        // username parameter, null otherwise
        for (var u in users) {
            if (users[u].username === username) {
                return users[u];
            }
        }
        return null;
    }

    function findUserByCredentials(credentials){
        //accepts an object credentials with properties username and password.
        // Returns a single user from the model whose username and password are
        // equal to the username and password properties in the credentials parameter,
        // null otherwise
        var username = credentials.username;
        var password = credentials.password;
        for (var u in users) {
            if (users[u].username === username && users[u].password === password) {
                return users[u];
            }
        }
        return null;
    }

    function updateUser(id, user){
        for (var u in users) {
            if (users[u]._id === id) {
                users[u].username = user.username;
                users[u].firstName = user.firstName;
                users[u].lastName = user.lastName;
                users[u].password = user.password;
                return users[u];
            }
        }
        return null;
    }

    function deleteUser(id) {
        for (var u in users) {
            if (users[u]._id === id) {
                users.splice(u, 1);
                return true;
            }
        }
        return false;
    }
};