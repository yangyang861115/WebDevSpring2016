/**
 * Created by yangyang on 2/23/16.
 */
(function(){
    angular.module("MovieApp")
           .factory("MovieService", MovieService);

    function MovieService ($http){

        var api = {
            findMoviesByTitle : findMoviesByTitle,
            findMovieByImdbID : findMovieByImdbID
        };

        return api;

        function findMoviesByTitle(title, callback){
            $http.get("http://www.omdbapi.com/?s="+title)
                .success(callback);
        }

        function findMovieByImdbID (imdbID, callback){
            $http.get("http://www.omdbapi.com/?i="+imdbID)
                 .success(callback);
        }

    }
})();