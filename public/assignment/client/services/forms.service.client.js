/**
 * Created by yangyang on 2/25/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService(){
        var forms = [];
        forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234},
        ];

        var model = {
            forms: forms,
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };

        return model;

        function createFormForUser(userId, form, callback) {
            //Adds property called _id with unique id.
            //You can use (new Date).getTime() to create a unique number
            //Adds property called userId equal to user id parameter
            //Adds new form to local array of forms
            var newForm = {
                "_id": (new Date).getTime(),
                "title": form.title,
                "userId": userId
            };
            model.forms.push(newForm);
            callback(newForm);
        }

        function findAllFormsForUser(userId, callback) {
            //Iterates over the array of current forms looking for forms whose user id is parameter user id
            //Calls back with found forms for user id parameter, empty array otherwise
            var userForms = [];
            for (var f in model.forms) {
                if(model.forms[f].userId === userId){
                    userForms.push(model.forms[f]);
                }
            }
            callback(userForms);

        }

        function deleteFormById(formId, callback){
            //Iterates over array of forms looking for form whose id is form id parameter
            //If found, removes form from current array of forms
            //Calls back with remaining array of forms
            for (var f in model.forms) {
                if(model.forms[f]._id === formId){
                    model.forms.splice(f, 1);
                }
            }
            callback(model.forms);

        }

        function updateFormById(formId, newForm, callback) {
            //Iterates over array of forms looking for form whose id is form id parameter
            //If found, updates form object with new form values
            //Calls back with update form
            for (var f in model.forms) {
                if(model.forms[f]._id === formId){
                    model.forms.splice(f, 1, newForm);
                }
            }
            callback(newForm);

        }
    }
})();