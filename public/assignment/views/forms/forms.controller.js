/**
 * Created by yangyang on 2/24/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, FormService){
        //$scope.forms = FormService.findAllFormsForUser(userId, callback);
        //$scope.addForm = FormService.createFormForUser(userId, form, callback);
        //$scope.updateForm = FormService.updateFormById(formId, newForm, callback);
        //$scope.deleteForm = FormService.deleteFormById(formId, callback);
        $scope.selectForm = selectForm;

        function selectForm(index) {

        }
    }
})();