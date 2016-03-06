/**
 * Created by yangyang on 3/3/16.
 */
(function () {
    angular
        .module("OmdbApp")
        .controller("LoginController", loginController);

    function loginController(UserService, $location) {
        var vm = this;

        vm.login = login;

        function init() {

        }
        init();

        function login(user) {
            UserService
                .login({
                    username: user.username,
                    password: user.password
                })
                .then(function (response) {
                    if(response.data) {
                        UserService.setCurrentUser(response.data);
                        $location.url("/profile");
                    }
                });
        }

    }
})();