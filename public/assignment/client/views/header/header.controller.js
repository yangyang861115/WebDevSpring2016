/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController(UserService, $location){
        var vm = this;
        vm.logout = logout;

        function init(){

        }
        init();


        function logout(){
            UserService.
                setCurrentUser(null);

            UserService
                .logout()
                .then(function(response) {
                    $location.url("/home");
                });
        }
    }
})();