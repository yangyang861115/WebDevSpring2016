/**
 * Created by yangyang on 2/29/16.
 */

var forms = require('./form.mock.json');

module.exports = function() {
    var api = {
        createForm: createForm,
        findAllForms: findAllForms,
        findFormById: findFormById,
        findFormByTitle: findFormByTitle,
        findFormsByUserId: findFormsByUserId,
        updateForm: updateForm,
        deleteForm: deleteForm,

    };
    return api;

    function createForm(form){
        var now = new Date();
        var newForm = {
            _id: "id_" + now.getTime(),
            title: form.title,
            userId: form.userId,
            fields: form.fields
        };

        forms.push(newForm);
        return forms;
    }

    function findAllForms() {
        return forms;
    }

    function findFormById(id) {
        for(var f in forms) {
            if(forms[f]._id == id){
                return forms[f];
            }
        }
        return null;
    }

    function findFormByTitle(title) {
        for(var f in forms) {
            if(forms[f].title == title){
                return forms[f];
            }
        }
        return null;
    }

    function updateForm(id, form) {
        for(var f in forms) {
            if(forms[f]._id == id){
                forms[f].title = form.title;
                forms[f].fields = form.fields;
                return forms[f];
            }
        }
        return null;
    }

    function deleteForm(id) {
        for(var f in forms) {
            if(forms[f]._id == id){
                forms.splice(f, 1);
                return true;
            }
        }
        return false;
    }

    function findFormsByUserId(userId){
        var userForms = [];
        for(var f in forms) {
            if(forms[f].userId == userId){
                userForms.push(forms[f]);
            }
        }
        return userForms;
    }
};