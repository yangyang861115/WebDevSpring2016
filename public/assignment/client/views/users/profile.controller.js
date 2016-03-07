/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope, $location, UserService) {
        var vm = this;
        vm.update = update;

        function init() {
            var user = $rootScope.currentUser;
            if(user) {
                UserService
                    .findUserByUsername(user.username)
                    .then(function (response) {
                        vm.user = response.data;
                    });
            } else {
                $location.url('/login');
            }
        }
        init();


        function update(user) {
            UserService
                .updateUser(user._id, user)
                .then(renderProfile, renderError);

            function renderProfile(response) {
                vm.message = "User update successfully";
                //console.log(response);
                $rootScope.currentUser = response.data;
            }

            function renderError(response) {
                vm.error = response.data.error;
            }
        }

    }
})();

