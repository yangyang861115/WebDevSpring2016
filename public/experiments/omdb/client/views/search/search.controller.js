/**
 * Created by yangyang on 3/5/16.
 */
(function() {
    angular
        .module("OmdbApp")
        .controller("SearchController", searchController);

    function searchController(OmdbService) {
        var vm = this;
        vm.search = search;

        function init(){

        }
        init();

        function search(movie){
            OmdbService
                .searchMovieByTitle(movie.title)
                .then(function(response){
                    vm.data = response.data;
                });
        }
    }


})();