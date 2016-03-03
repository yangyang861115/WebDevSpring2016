/**
 * Created by yangyang on 3/3/16.
 */
(function(){
    angular
        .module("OmdbApp")
        .controller("LoginController", loginController);

    function loginController (UserService){
        var vm = this;

        vm.login = login;

        function init(){

        }
        init();

        function login(user) {
            UserService.findUserByCredentials({
                username: user.username,
                password: user.password
            });
        }

    }
})();