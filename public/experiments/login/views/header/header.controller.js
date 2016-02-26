/**
 * Created by yangyang on 2/25/16.
 */
(function(){
    angular
        .module("LoginExample")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location,UserService ){
        $scope.$location = $location;
        $scope.logout = logout;

        function logout(){
            UserService.setCurrentUser(null);
            $location.url("/home");
        }
    }
})();