/**
 * Created by yangyang on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, UserService){
        $scope.user = $rootScope.currentUser;

        $scope.update = update;

        function update(user){
            UserService.updateUser(user._id, user, function(){});

        }

    }
})();

