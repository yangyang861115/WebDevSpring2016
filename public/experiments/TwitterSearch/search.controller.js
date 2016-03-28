/**
 * Created by yangyang on 3/28/16.
 */
(function () {
    angular.module("searchApp")
        .controller("SearchController", searchController);

    function searchController($scope, OmdbService) {
        var vm = this;
        vm.availableTypeOptions = ["movie", "series", "episode", "game"];
        vm.YEAR_PATTERN = /^[12][0-9]{3}$/;
        vm.search = search;
        vm.reset = reset;
        vm.details = details;

        function init() {

        }

        init();

        function search(searchFm) {
            vm.data = null;
            vm.movieDetails=null;
            if(searchFm.$valid) {
                OmdbService
                    .searchMovieByQuery(vm.movie)
                    .then(
                        function (response) {
                            vm.data = response.data;
                        });
            }
        }

        function reset(searchFm){
            searchFm.$setPristine();
            vm.movie = null;
            vm.data = null;
            vm.movieDetails=null;
        }

        function details(imdbID) {
            OmdbService
                .findMovieByImdbID(imdbID)
                .then(
                    function (response) {
                        vm.movieDetails = response.data;
                    });
        }

    }
})();