/**
 * Created by yangyang on 2/25/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http) {
        var api = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };

        return api;

        function createFormForUser(userId, form) {
            $http.post("/api/assignment/user/" + userId + "/form", form);
        }

        function findAllFormsForUser(userId) {
            $http.get("/api/assignment/user/" + userId + "/form");
        }

        function deleteFormById(formId) {
            $http.delete("/api/assignment/form/" + formId);
        }

        function updateFormById(formId, form) {
            $http.put("/api/assignment/form/" + formId, form);
        }
    }
})();