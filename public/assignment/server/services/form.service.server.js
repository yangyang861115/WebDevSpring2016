/**
 * Created by yangyang on 2/29/16.
 */
module.exports = function(app, model) {
    /*
     GET /api/assignment/user/:userId/form
     returns an array of forms belonging to a user whose id is equal to the userId path parameter

     GET /api/assignment/form/:formId
     returns a form object whose id is equal to the formId path parameter

     DELETE /api/assignment/form/:formId
     removes a form object whose id is equal to the formId path parameter

     POST /api/assignment/user/:userId/form
     creates a new form whose properties are the same as the form object embedded in the HTTP
     request's body and the form belongs to a user whose id is equal to the userId path parameter.
     The form object's id is initially null since it is a new record. The id of the new form
     should be set dynamically using Node.js guid or node-uuid libraries.
     These will eventually be set by the database when they are inserted into a collection

     PUT /api/assignment/form/:formId
     updates a form object whose id is equal to the formId path parameter so that its
     properties are the same as the property values of the form object embedded in the request's body
     */
    app.post("/api/assignment/user/:userId/form", createFormForUserId);
    app.put("/api/assignment/form/:formId", updateFormByFormId);
    app.get("/api/assignment/user/:userId/form", getFormsByUserId);
    app.get("/api/assignment/form/:formId", getFormByFormId);
    app.delete("/api/assignment/form/:formId", deleteFormByFormId);

    function createFormForUserId (req, res){
        var userId = req.params.userId;
        var form = req.body;
        var forms = model.createForm(form);
        res.json(forms);
    }

    function updateFormByFormId(req, res) {
        var formId = req.params.formId;
        var form = req.body;
        var form = model.updateForm(formId, form);
        if (form) {
            res.json(form);
            return;
        }
        res.json({message: "Form not found"});
    }

    function getFormsByUserId(req, res){
        var userId = req.params.userId;

    }

    function getFormByFormId(req, res){
        var formId = req.params.formId;
        var form = model.findFormById(id);
        if(form) {
            res.json(form);
            return;
        }
        res.json({message: "Form not found"});
    }

    function deleteFormByFormId(req, res){
        var formId = req.params.formId;
        if(model.deleteForm(formId)){
            res.send(200);
            return;
        }
        res.json({message: "Form not found"});
    }

};