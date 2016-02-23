/**
 * Created by yangyang on 2/23/16.
 */
(function(){
    angular.module("MovieApp")
           .controller("NavController", NavController);

    function NavController($location, $scope){
        $scope.$location = $location;
    }
})();