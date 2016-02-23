/**
 * Created by yangyang on 2/23/16.
 */
(function(){
    angular.module("MovieApp")
        .controller("DetailsController", detailsController);

    function detailsController(MovieService, $scope, $routeParams, $http){
        var imdbID = $routeParams.imdbID;
        MovieService.findMovieByImdbID(imdbID, render);

        function render(response){
            $scope.movie = response;
        }
    }

})();