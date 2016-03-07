/**
 * Created by yangyang on 2/24/16.
 */
(function() {
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);

    function HomeController(UserService, $http) {
        var vm = this;

        function  init(){
            //UserService
            //    .getCurrentUser()
            //    .then(function(response){
            //        vm.currentUser = response.data;
            //    });
        }
        init();
    }
})();