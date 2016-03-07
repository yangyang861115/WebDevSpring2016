/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, UserService, FormService) {
        var vm = this;

        vm.addForm = addForm;
        vm.updateForm = updateForm;
        vm.deleteForm = deleteForm;
        vm.selectForm = selectForm;

        function init() {
            UserService
                .getCurrentUser()
                .then(function (response) {
                    vm.userId = response.data._id;
                    FormService.findAllFormsForUser(vm.userId)
                        .then(renderForms, renderError);
                });

            console.log(vm.forms);

        }

        init();


        function addForm(form) {
            if (form != null) {
                FormService
                    .createFormForUser(user._id, form)
                    .then(renderForms, renderError);
            }
        }

        function updateForm(form) {
            FormService
                .updateFormById(form._id, form)
                .then(renderForms, renderError);
            $scope.selected = null;
        }

        function deleteForm(index) {
            FormService
                .deleteFormById($scope.forms[index]._id)
                .then(function () {
                    return FormService.findAllFormsForUser();
                })
                .then(renderForms, renderError);
        }

        function selectForm(index) {
            $scope.form = $scope.forms[index];
            $scope.selected = index;
        }

        function renderForms(response) {
            vm.forms = response.data;
            console.log(vm.forms);
        }

        function renderError(response) {
            vm.message = response.data.message;
        }

    }
})();