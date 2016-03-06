/**
 * Created by yangyang on 3/3/16.
 */
(function () {
    angular
        .module("OmdbApp")
        .factory("UserService", userService);

    function userService($http, $rootScope) {
        var api = {
            findUserByCredentials: findUserByCredentials,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            createUser: createUser,
            logout:logout,
            getProfile: getProfile
        };
        return api;

        function findUserByCredentials(credentials) {
            return $http.post("/api/project/omdb/login", credentials);
        }

        function setCurrentUser(user){
            $rootScope.currentUser = user;
        }

        function getCurrentUser(){
            //return $rootScope.currentUser;
            return $http.get("/api/project/omdb/loggedin");
        }

        function createUser(user){
            return $http.post("/api/project/omdb/register", user);
        }

        function logout(){
            return $http.post("/api/project/omdb/logout");
        }

        function getProfile(){
            return $http.get("/api/project/omdb/profile/" + $rootScope.currentUser._id);
        }
    }
})();