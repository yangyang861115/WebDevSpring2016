/**
 * Created by yangyang on 2/22/16.
 */
(function(){
    angular.module("MovieAdminApp",[])
           .controller("MovieListController", MovieListController);

    function MovieListController($scope){

        $scope.movies = [
            {"id": 123, "title": "Snow white", "director": "JJ"},
            {"id": 124, "title": "Star War", "director": "QQ"},
            {"id": 125, "title": "Snow ", "director": "KK"},
        ];

        //event handler declarations
        $scope.addMovie = addMovie;
        $scope.deleteMovie = deleteMovie;
        $scope.selectMovie = selectMovie;
        $scope.updateMovie = updateMovie;

        //event handler implementation
        function addMovie(movie){
            var newMovie = {
                id: movie.id,
                title: movie.title,
                director: movie.director
            };
            //$scope.movies.push($scope.movie);
            $scope.movies.push(newMovie);
        }

        function deleteMovie(movie){
            var index = $scope.movies.indexOf(movie);
            $scope.movies.splice(index, 1);
        }

        var selectedMovieIndex = -1;
        function selectMovie(movie){
            selectedMovieIndex = $scope.movies.indexOf(movie);
            $scope.movie = {
                id: movie.id,
                title: movie.title,
                director: movie.director
            };
        }

        function updateMovie(movie){
            if (selectedMovieIndex >= 0) {
                $scope.movies[selectedMovieIndex] = {
                    id: movie.id,
                    title: movie.title,
                    director: movie.director
                };
            }
        }
    }


})();

