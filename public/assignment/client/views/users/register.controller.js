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
            UserService.createUser(user, setUser);

            function setUser(user){
                $rootScope.currentUser = user;
                $location.url('/profile');
            }
        }
    }
})();

