/**
 * Created by yangyang on 2/29/16.
 */
module.exports = function(app, model, db) {
    /*
     GET /api/assignment/form/:formId/field
     returns an array of fields belonging to a form object whose id is equal to the formId path parameter

     GET /api/assignment/form/:formId/field/:fieldId
     returns a field object whose id is equal to the fieldId path parameter and belonging to a form object whose id is equal to the formId path parameter

     DELETE /api/assignment/form/:formId/field/:fieldId
     removes a field object whose id is equal to the fieldId path parameter and belonging to a form object whose id is equal to the formId path parameter

     POST /api/assignment/form/:formId/field
     creates a new field whose properties are the same as the field object embedded in the request's body and the field belongs to a form whose id is equal to the formId path parameter.
      The field object's id is initially null since it is a new record.
      The id of the new form field should be set dynamically using Node.js guid or node-uuid libraries.
      These will eventually be set by the database when they are inserted into a collection

     PUT /api/assignment/form/:formId/field/:fieldId
     updates a field object whose id is equal to the fieldId path parameter and belonging to a form object whose id is equal to the formId path parameter so that its properties are the same as the property values of the field object embedded in the request's body
     */
    app.get("/api/assignment/form/:formId/field", getFieldsByFormId);
    app.get("/api/assignment/form/:formId/field/:fieldId", getFieldByFieldId);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFieldId);
    app.post("/api/assignment/form/:formId/field", createFieldForFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId",updateFieldForFormId);

    function getFieldsByFormId(req, res){
        var formId = req.params.formId;
        var form = module.findFormById(formId);
        if (form) {
            var fields = form.fields;
            res.json(fields);
            return;
        }
        res.json({message: "Form not found"});
    }

    function getFieldByFieldId(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var form = module.findFormById(formId);
        if (form) {
            var fields = form.fields;
            for(var f in fields) {
                if(fields._id === fieldId) {
                    res.json(fields[f]);
                    return;
                }
            }
            res.json({message: "Field not found"});
        }
        res.json({message: "Form not found"});
    }

    function deleteFieldByFieldId(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var form = module.findFormById(formId);
        if (form) {
            var fields = form.fields;
            for(var f in fields) {
                if(fields._id === fieldId) {
                    fields.slice(f, 1);
                    res.json(200);
                    return;
                }
            }
            res.json({message: "Field not found"});
        }
        res.json({message: "Form not found"});
    }

    function createFieldForFormId(req, res){
        var formId = req.params.formId;
        var field = req.body;
        var form = module.findFormById(formId);
        if (form) {
            form.fields.push(field);
            res.json(form);
            return;
        }
        res.json({message: "Form not found"});
    }

    function updateFieldForFormId(req, res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;
        var form = module.findFormById(formId);
        if (form) {
            var fields = form.fields;
            for(var f in fields) {
                if(fields._id === fieldId) {
                    fields.label = field.label;
                    fields.type = field.type;
                    fields.placeholder = field.placeholder;
                    fields.options = field.options;
                    res.json(form);
                    return;
                }
            }
            res.json({message: "Field not found"});
        }
        res.json({message: "Form not found"});
    }
};