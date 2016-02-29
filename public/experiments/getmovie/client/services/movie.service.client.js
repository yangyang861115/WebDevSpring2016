/**
 * Created by yangyang on 2/29/16.
 */
(function(){
    angular
        .module("GetMovieApp")
        .factory("MovieService", MovieService);

    function MovieService($http){
        var api = {
            getAllMovies: getAllMovies,
            getMovieById: getMovieById
        };
        return api;

        function getAllMovies(){
            return $http.get("/api/experiments/getmoives/movie");
        }

        function getMovieById(id) {
            return $http.get("/api/experiments/getmoives/movie/" + id);
        }
    }
})();