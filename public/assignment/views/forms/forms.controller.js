/**
 * Created by yangyang on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $rootScope, FormService){
        var user = $rootScope.currentUser;
        $scope.forms = [];
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        FormService.findAllFormsForUser(user._id, function (forms){
            $scope.forms = forms;
        });

        function addForm(form){
            if(form != null) {
                FormService.createFormForUser(user._id, form, function (form){
                    $scope.form = {};
                    $scope.forms.push(form);
                });
            }
        }

        function updateForm(form){
            FormService.updateFormById(form._id, form, function(){
                $scope.form = {};
            });
        }

        function deleteForm(index){
            FormService.deleteFormById($scope.forms[index]._id, function(forms){
                $scope.forms.splice(index, 1);
            });
        }

        function selectForm(index){
            $scope.form = $scope.forms[index];
            $scope.selected = index;
        }


    }
})();