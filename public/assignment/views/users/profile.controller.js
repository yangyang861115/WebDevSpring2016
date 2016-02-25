/**
 * Created by yangyang on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, UserService){
        var user = $rootScope.user;
        $scope.update = update;

        function update(user){
            //UserService.updateUser(userId, user, callback);
        }

    }
})();

