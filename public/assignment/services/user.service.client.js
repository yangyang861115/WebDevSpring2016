/**
 * Created by yangyang on 2/25/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService() {
        var users = [];
        users = [
            {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]		},
            {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]		},
            {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]		},
            {	"_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {	"_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]		}
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };

        return api;

        function findUserByCredentials(username, password, callback){
            //Iterates over the array of current users looking for user object whose username and password match the parameters

        }

        function findAllUsers(callback){

        }

        function createUser(user, callback){
            //Adds property called _id with unique value to the user object parameter. You can use (new Date).getTime() to get a unique time stamp
            //Adds the new user to local array of users

        }

        function deleteUserById(userId, callback) {
            //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
            //If found, removes user from the array of current users

        }

        function updateUser(userId, user, callback){
            //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
            //If found, updates user with new user properties

        }

    }
})();