/**
 * Created by yangyang on 2/25/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var model = {
            users: [
                {
                    "_id": 123, "firstName": "Alice", "lastName": "Wonderland",
                    "username": "alice", "password": "alice", "roles": ["student"]
                },
                {
                    "_id": 234, "firstName": "Bob", "lastName": "Hope",
                    "username": "bob", "password": "bob", "roles": ["admin"]
                },
                {
                    "_id": 345, "firstName": "Charlie", "lastName": "Brown",
                    "username": "charlie", "password": "charlie", "roles": ["faculty"]
                },
                {
                    "_id": 456, "firstName": "Dan", "lastName": "Craig",
                    "username": "dan", "password": "dan", "roles": ["faculty", "admin"]
                },
                {
                    "_id": 567, "firstName": "Edward", "lastName": "Norton",
                    "username": "ed", "password": "ed", "roles": ["student"]
                }
            ],
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            //setCurrentUser: setCurrentUser,
            //getCurrentUser: getCurrentUser
        };

        return model;

        function findUserByCredentials(username, password, callback) {
            //Iterates over the array of current users looking for user object
            // whose username and password match the parameters
            //Calls back with user found or null otherwise

            for (var u in model.users) {
                if (model.users[u].username === username && model.users[u].password === password) {
                    return callback(model.users[u]);
                }
            }
            return callback(null);
        }

        function findAllUsers(callback) {
            //Calls back with array of all users
            return callback(model.users);
        }

        function createUser(user, callback) {
            //Adds property called _id with unique value to the user object parameter.
            // You can use (new Date).getTime() to get a unique time stamp
            //Adds the new user to local array of users
            var newUser = {
                "_id": (new Date).getTime(),
                "firstName": user.firstName,
                "lastName": user.lastName,
                "username": user.username,
                "password": user.password,
                "email" : user.email
            };
            model.users.push(newUser);
            return callback(newUser);

        }

        function deleteUserById(userId, callback) {
            //Iterates over the array of current users looking for a user object
            //whose user id is equal to parameter user id
            //If found, removes user from the array of current users
            //Calls back with remaining array of all users
            for (var u in model.users) {
                if (model.users[u]._id === userId) {
                    model.users.splice(u, 1);
                }
            }
            return callback(model.users);
        }

        function updateUser(userId, user, callback) {
            //Iterates over the array of current users looking for a user object
            //whose user id is equal to parameter user id
            //If found, updates user with new user properties
            //Calls back with remaining array of all users
            for (var u in model.users) {
                if (model.users[u]._id === userId) {
                    newUser = {
                        "_id": user._id,
                        "firstName": user.firstName,
                        "lastName": user.lastName,
                        "username": user.username,
                        "password": user.password,
                        "email" : user.email
                    };
                    model.users.splice(u, 1, newUser);
                }
            }
            return callback(model.users);
        }

        //function setCurrentUser(user) {
        //    $rootScope.currentUser = user;
        //}
        //
        //function getCurrentUser() {
        //    return $rootScope.currentUser;
        //}

    }
})();