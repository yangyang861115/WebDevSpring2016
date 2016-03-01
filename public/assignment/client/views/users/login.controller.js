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
            UserService
                .findUserByCredentials(user.username, user.password)
                .then(renderUser, renderError);

            function renderUser (response){
                console.log(response.data);
                $rootScope.currentUser = response.data;
                $location.url('/profile');
            }

            function renderError (response){
                $scope.message = response.data.message;
            }
        }

    }
})();