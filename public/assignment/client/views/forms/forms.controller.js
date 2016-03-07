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
        }

        init();


        function addForm(form) {
            if (form != null) {
                FormService
                    .createFormForUser(vm.userId, form)
                    .then(renderForms, renderError);
                vm.form = null;
            }
        }

        function updateForm(form) {
            if(form != null && vm.selected >= 0) {
                FormService
                    .updateFormById(form._id, form)
                    .then(renderForms, renderError);
                vm.selected = null;
                vm.form = null;
            }
        }

        function deleteForm(index) {
            FormService
                .deleteFormById(vm.forms[index]._id)
                .then(renderForms, renderError);

        }

        function selectForm(index) {
            vm.form = vm.forms[index];
            vm.selected = index;
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