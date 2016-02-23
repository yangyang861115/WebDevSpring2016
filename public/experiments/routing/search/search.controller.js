/**
 * Created by yangyang on 2/23/16.
 */
(function(){
    angular.module("MovieApp")
        .controller("SearchController", searchController);

    function searchController(MovieService, $scope, $http, $routeParams, $location){
        var title = $routeParams.title;

        if(title) {
            search(title);
        }

        //event handler declarations
        $scope.search = search;

        //event handler implementation
        function search(title){
            console.log(title);
            $location.url('/search/'+title);
            MovieService.findMoviesByTitle(title, render);

        }

        function render(response){
            console.log(response);
            $scope.movies = response;
        }
    }
})();