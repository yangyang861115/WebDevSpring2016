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
            $rootScope.user = user;
            $location.url('/profile');

        }
    }
})();

