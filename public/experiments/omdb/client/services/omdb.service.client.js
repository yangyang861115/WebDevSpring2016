/**
 * Created by yangyang on 3/5/16.
 */
(function () {
    angular
        .module("OmdbApp")
        .factory("OmdbService", omdbService);

    function omdbService($http) {
        var api = {
            searchMovieByTitle: searchMovieByTitle,
            searchMovieByImdbID: searchMovieByImdbID
        };
        return api;

        function searchMovieByTitle(title) {
            return $http.get("http://www.omdbapi.com/?s=" + title);
        }

        function searchMovieByImdbID(imdbID) {
            return $http.get("http://www.omdbapi.com/?i=" + imdbID);
        }
    }
})();