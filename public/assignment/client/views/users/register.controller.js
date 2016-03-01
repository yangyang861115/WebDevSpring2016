/**
 * Created by yangyang on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($rootScope, $scope, $location, UserService) {
        $scope.register = register;


        function register (user){
            UserService
                .createUser(user)
                .then(renderUser, renderError);

            function renderUser(response){
                $rootScope.currentUser = response.data.user;
                $location.url('/profile');
            }
            function renderError(response){
                $scope.message = response.data.message;
            }
        }
    }
})();

