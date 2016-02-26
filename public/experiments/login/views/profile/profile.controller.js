/**
 * Created by yangyang on 2/25/16.
 */
(function(){
    angular
        .module("LoginExample")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService, $location){
        $scope.message = null;
        $scope.error = null;

        $scope.currentUser = UserService.getCurrentUser();
        if(!$scope.currentUser) {
            $location.url("/home");
        }

        $scope.updateUser = updateUser;

        function updateUser(user) {
            $scope.error = null;
            $scope.message = null;
            //same validation as register
            $scope.currentUser = UserService.updateUser(user);

            if (user) {
                $scope.message = "User update successfully";
                UserService.setCurrentUser($scope.currentUser);
            } else {
                $scope.message = "Unable to update the user";
            }
        }
    }
})();