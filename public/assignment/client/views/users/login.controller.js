/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService){
        var vm = this;

        vm.login = login;

        function login(user){
            UserService
                .findUserByCredentials(vm.user)
                .then(renderUser, renderError);

            function renderUser (response){
                console.log(response);
                $rootScope.currentUser = response.data;
                $location.url('/profile');
            }

            function renderError (response){
                vm.message = response.data.message;
            }
        }

    }
})();