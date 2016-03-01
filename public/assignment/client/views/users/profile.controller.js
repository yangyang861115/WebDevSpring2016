/**
 * Created by yangyang on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, UserService){
        $scope.user = $rootScope.currentUser;
        $scope.error = null;
        $scope.message = null;
        $scope.update = update;

        function update(user){
            UserService.updateUser(user._id, user, function(users){
                //need to change
                if (users) {
                    $scope.message = "User update successfully";
                } else {
                    $scope.error = "Unable to update the user";
                }
            });

        }

    }
})();

