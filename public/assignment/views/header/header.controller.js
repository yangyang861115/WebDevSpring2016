/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $rootScope, UserService, $location){

        $scope.logout = logout;

        function logout(){
            $rootScope.currentUser = null;
            $location.url("/home");
        }
    }
})();