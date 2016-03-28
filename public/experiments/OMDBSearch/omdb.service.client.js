(function () {
    angular
        .module("searchApp")
        .factory("OmdbService", omdbService);

    function omdbService($http) {
        var api = {
            searchMovieByQuery: searchMovieByQuery,
            findMovieByImdbID: findMovieByImdbID
        };
        return api;

        function findMovieByImdbID(imdbID) {
            // use JSONP since API does not support CORS
            return $http.jsonp("http://www.omdbapi.com/?i=" + imdbID + "&callback=JSON_CALLBACK");
        }

        function searchMovieByQuery(movie) {
            var query = "s=" + movie.Title;
            if(movie.Year) {
                query += "&y="+movie.Year;
            }
            if(movie.Type) {
                query += "&type="+ movie.Type;
            }
            console.log(query);
            return $http.jsonp("http://www.omdbapi.com/?" + query + "&callback=JSON_CALLBACK");
        }
    }
})();