/**
 * Created by yangyang on 4/5/16.
 */
(function(){
    'use strict';
    angular
        .module("users")
        .controller("UserController", UserController);

    function UserController(userService, $mdSidenav, $mdBottomSheet) {
        var vm = this;
        vm.selected = null;
        vm.users = [];
        vm.selectUser = selectUser;
        vm.toggleList = toggleList;
        vm.share = share;

        function init() {
            userService
                .loadAllUsers()
                .then(
                    function(users) {
                        vm.users = [].concat(users);
                        vm.selected = users[0];
                    }
                );
        }
        init();

        function selectUser(user){
            vm.selected = angular.isNumber(user) ? $scope.users[user] : user;

        }

        function toggleList(){
            $mdSidenav('left').toggle();
        }

        function share(selectedUser){
            $mdBottomSheet.show({
                controller: UserSheetController,
                controllerAs : 'vm',
                templateUrl: './bottomsheet.html',
                parent: angular.element(document.querySelector("#content"))
            });

            function UserSheetController(){
                var vm = this;
                this.user = selectedUser;
                this.items = [
                    { name: 'Phone'       , icon: 'phone'       , icon_url: './svg/phone.svg'},
                    { name: 'Twitter'     , icon: 'twitter'     , icon_url: './svg/twitter.svg'},
                    { name: 'Google+'     , icon: 'google_plus' , icon_url: './svg/google_plus.svg'},
                    { name: 'Hangout'     , icon: 'hangouts'    , icon_url: './svg/hangouts.svg'}
                ];
                this.performAction = function(action){
                    $mdBottomSheet.hide();
                }

            }
        }
    }
})();