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
            UserService.findUserByCredentials(user.username, user.password, function(user){
                $rootScope.currentUser = user;
            });
            if ($rootScope.currentUser) {
                $location.url('/profile');
            } else {
                $scope.message = "Incorrect username or password";
            }
        }

    }
})();