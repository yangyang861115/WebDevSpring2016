/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($location){
        var vm = this;

        function init(){
            vm.$location = $location;
        }
        init();
    }
})();
