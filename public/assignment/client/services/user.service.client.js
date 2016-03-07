/**
 * Created by yangyang on 2/25/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope) {
        var api = {
            findUserByUsername: findUserByUsername,
            login: login,
            logout: logout,
            getCurrentUser: getCurrentUser,
            setCurrentUser: setCurrentUser,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };

        return api;

        function findUserByUsername(username){
            return $http.get("/api/assignment/user/profile/" + username);
        }

        function login(user) {
            return $http.post("/api/assignment/user/login", user);
        }

        function findAllUsers() {
            return $http.get("/api/assignment/user");
        }

        function createUser(user) {
            return $http.post("/api/assignment/user", user);
        }

        function deleteUserById(userId) {
            return $http.delete("/api/assignment/user/" + userId);
        }

        function updateUser(userId, user) {
            return $http.put("/api/assignment/user/" + userId, user);
        }

        function logout() {
            return $http.post("/api/assignment/user/logout");
        }

        function getCurrentUser(){
            return $http.get("/api/assignment/user/check/loggedin");
        }

        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }

    }
})();