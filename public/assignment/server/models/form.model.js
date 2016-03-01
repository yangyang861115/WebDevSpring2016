/**
 * Created by yangyang on 2/29/16.
 */
module.exports = function() {
    var forms = require('./form.mock.json');

    var api = {
        createForm: createForm,
        findAllForms: findAllForms,
        findFormById: findFormById,
        findFormByTitle: findFormByTitle,
        updateForm: updateForm,
        deleteForm: deleteForm,
    };
    return api;

    function createForm(form){
        var now = new Date();
        form._id = "id" + now.getTime();
        forms.push(form);
        return form;
    }

    function findAllForms() {
        return forms;
    }

    function findFormById(id) {
        for(var f in forms) {
            if(forms[f]._id === id){
                return forms[f];
            }
        }
        return null;
    }

    function findFormByTitle(title) {
        for(var f in forms) {
            if(forms[f].title === title){
                return forms[f];
            }
        }
        return null;
    }

    function updateForm(id, form) {
        for(var f in forms) {
            if(forms[f]._id === id){
                forms[f].title = form.title;
                forms[f].fields = form.fields;
                return forms[f];
            }
        }
        return null;
    }

    function deleteForm(id) {
        for(var f in forms) {
            if(forms[f]._id === id){
                forms.splice(f, 1);
                return true;
            }
        }
        return false;
    }
};