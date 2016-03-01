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

        function init(){
            FormService
                .findAllFormsForUser(user._id)
                .then(renderForms, renderError);
        }
        init();

        function addForm(form){
            if(form != null) {
                FormService
                    .createFormForUser(user._id, form)
                    .then(renderForms, renderError);
            }
        }

        function updateForm(form){
            FormService
                .updateFormById(form._id, form)
                .then(renderForms, renderError);
            $scope.selected = null;
        }

        function deleteForm(index){
            FormService
                .deleteFormById($scope.forms[index]._id)
                .then(function () {
                    return FormService.findAllFormsForUser();
                })
                .then(renderForms, renderError);
        }

        function selectForm(index){
            $scope.form = $scope.forms[index];
            $scope.selected = index;
        }

        function renderForms(response) {
            $scope.forms = response.data;
        }

        function renderError (response) {
            $scope.message = response.data.message;
        }

    }
})();