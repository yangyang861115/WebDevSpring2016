/**
 * Created by yangyang on 3/3/16.
 */
(function(){
    angular
        .module("OmdbApp")
        .controller("NavigationController", navigationController);

    function navigationController ($location){
        var vm = this;

        function init(){
            vm.$location = $location;
        }
        init();


    }
})();