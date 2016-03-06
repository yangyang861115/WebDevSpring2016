/**
 * Created by yangyang on 3/5/16.
 */
(function(){
    angular
        .module("OmdbApp")
        .controller("DetailsController", detailsController);

    function detailsController(OmdbService, $routeParams, $rootScope, $location, MovieService) {
        var vm = this;
        var imdbID = $routeParams.imdbID;
        var currentUser = $rootScope.currentUser;
        vm.favorite = favorite;

        function init(){
            OmdbService
                .searchMovieByImdbID(imdbID)
                .then(function(response){
                    vm.data = response.data;
                });
        }
        init();

        function favorite(movie){
            if (currentUser) {
                MovieService
                    .setUserLikesMovie(currentUser._id, movie);
            } else {
                $location.url("/login");
            }

        }
    }

})();