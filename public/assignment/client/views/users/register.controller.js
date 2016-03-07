/**
 * Created by yangyang on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($rootScope, $scope, $location, UserService) {
        var vm = this;

        vm.register = register;

        function init(){

        }
        init();

        function register (user){

            if(user){
                if (!user.password || !user.password2 ){
                    //password required
                    vm.message = "Passwords are required!";
                } else if (user.password != user.password2){
                    //password inconsistent
                    vm.message = "Passwords are not the same!";
                }

                    // else if (UserService.checkUsername(user.username)){
                //    //username already registered
                //    vm.message = "Username has already been registered. Please choose another username!";
                //}
                else {
                    UserService
                        .createUser(user)
                        .then(renderUser, renderError);
                }

            } else {
                vm.message = "Please fill the form";
            }



            function renderUser(response){
                console.log(response.data);
                UserService.setCurrentUser(response.data.user);
                $location.url('/profile');
            }
            function renderError(response){
                vm.message = response.data.message;
            }
        }
    }
})();

