/**
 * Created by yangyang on 3/3/16.
 */
(function(){
    angular
        .module("OmdbApp")
        .controller("NavigationController", navigationController);

    function navigationController ($location, UserService){
        var vm = this;
        vm.logout = logout;

        function init(){
            vm.$location = $location;
        }
        init();

        function logout(){
            //UserService.setCurrentUser(null);
            //$location.url("/home");
            UserService
                .logout()
                .then(function(){
                    UserService.setCurrentUser(null);
                    $location.url("/home");
                });
        };

    }
})();