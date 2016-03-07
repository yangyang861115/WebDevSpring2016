/**
 * Created by yangyang on 2/29/16.
 */
var users = require('./user.mock.json');

module.exports = function() {
    /*Create - should accept an instance object, add it to a corresponding collection, and return the collection
     FindAll - should take no arguments, and return the corresponding collection
     FindById - should take an ID as an argument, find an instance object in the corresponding collection whose ID property is equal to the ID argument, return the instance found, null otherwise
     Update - should take an ID and object instance as arguments, find the object instance in the corresponding collection whose ID property is equal to the ID argument, update the found instance with property values in the argument instance object
     Delete - should accept an ID as an argument, remove the instance object from the corresponding collection whose ID property is equal to the ID argument

     Implement CRUD operations described in the general requirements
     findUserByUsername(username) - returns a single user whose username is equal to username parameter, null otherwise
     findUserByCredentials(credentials) - accepts an object credentials with properties username and password. Returns a single user from the model whose username and password are equal to the username and password properties in the credentials parameter, null otherwise
    */
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
        user._id = "id_" + now.getTime();
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
            if (users[u]._id == id) {
                users[u].username = user.username;
                users[u].firstName = user.firstName;
                users[u].lastName = user.lastName;
                users[u].password = user.password;
                users[u].email = user.email;
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