/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService){
        $scope.login = login;

        function login(user){
            //$rootScope.user = findUserByCredentials(username, password, callback);
            $location.url('/profile');
        }

    }
})();