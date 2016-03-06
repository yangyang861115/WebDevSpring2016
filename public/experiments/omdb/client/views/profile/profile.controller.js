/**
 * Created by yangyang on 3/3/16.
 */
(function () {
    angular
        .module("OmdbApp")
        .controller("ProfileController", profileController);

    function profileController(UserService, $location) {
        var vm = this;

        function init() {
            UserService
                .getProfile()
                .then(function(response){
                    vm.profile = response.data;
                    console.log(vm.profile);
                });
        }
        init();
    }
})();