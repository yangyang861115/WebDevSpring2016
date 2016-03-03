/**
 * Created by yangyang on 3/3/16.
 */
(function(){
    angular
        .module("OmdbApp")
        .factory("UserService", userService);

    function userService (){
        var api = {
            findUserByCredentials: findUserByCredentials
        };
        return api;

        function findUserByCredentials(credentials){
            console.log(credentials);
        }
    }
})();