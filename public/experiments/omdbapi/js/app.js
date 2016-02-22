/**
 * Created by yangyang on 2/21/16.
 */
(function(){
    $(init);

    var $movieTitleTxt;
    var $searchBtn;
    var $searchResults;

    var $plot;
    var $actors;
    var $title;
    var $poster;
    var $director;

    var SEARCH_URL = "http://www.omdbapi.com/?s=TITLE";
    var DETAILS_URL = "http://www.omdbapi.com/?i=IMDBID";

    function init() {
        $movieTitleTxt = $("#movieTitleTxt");
        $searchBtn = $("#searchBtn");
        $searchResults = $("#searchResults tbody");
        $searchBtn.click(searchMovie);

        $plot = $("#plot");
        $actors = $("#actors");
        $title = $("#title");
        $poster = $("#poster");
        $director = $("#director");

    }

    function searchMovie(){
        var title = $movieTitleTxt.val();
        var url = SEARCH_URL.replace('TITLE', title);
        $.ajax({
            url: url,
            success: renderSearchResults
        });
    }

    function renderSearchResults(response){
        var totalResults = response.renderSearchResults;
        var movies = response.Search;
        $searchResults.empty();
        for (var m = 0; m < movies.length; m++) {
            var movie = movies[m];
            var posterUrl = movie.Poster;
            var title = movie.Title;
            var year = movie.Year;
            var imdbID = movie.imdbID;

            var $tr = $("<tr>").attr("id", imdbID).click(fetchMovieDetails);
            var $img = $("<img>").addClass("posterThmb").attr("src", posterUrl);
            var $td = $("<td>").append($img).appendTo($tr);
            $td = $("<td>").append(title).appendTo($tr);
            $td = $("<td>").append(year).appendTo($tr);
            $td = $("<td>").append(imdbID).appendTo($tr);

            $searchResults.append($tr);
        }

    }


    function fetchMovieDetails(event){
        var $tr = $(event.currentTarget);
        var imdbID = $tr.attr("id");
        var url = DETAILS_URL.replace("IMDBID", imdbID);
        $.ajax({
            url: url,
            success: renderMovieDetails
        });
    }

    function renderMovieDetails(response){
        console.log(response);
        var actors = response.Actors;
        var title = response.Title;
        var director = response.Director;
        var plot = response.Plot;
        var poster = response.Poster;

        $title.html(title);
        $plot.html(plot);
        $poster.attr("src", poster);
        $director.html(director);


        $actors.empty();
        var actorArray = actors.split(',');
        for (var a in actorArray) {
            var actor = actorArray[a];
            $li = $("<li>").append(actor).appendTo($actors);
        }

    }


})();