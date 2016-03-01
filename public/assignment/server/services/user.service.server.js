/**
 * Created by yangyang on 2/29/16.
 */
module.exports = function (app, model) {
    /*
     POST /api/assignment/user
     creates a new user embedded in the body of the request, and responds with an array of all users
     GET /api/assignment/user
     responds with an array of all users
     GET /api/assignment/user/:id
     responds with a single user whose id property is equal to the id path parameter
     GET /api/assignment/user?username=username
     responds with a single user whose username property is equal to the username path parameter
     GET /api/assignment/user?username=alice&password=wonderland
     responds with a single user whose username property is equal to the username path parameter and its password is equal to the password path parameter
     PUT /api/assignment/user/:id
     updates an existing user whose id property is equal to the id path parameter. The new properties are set to the values in the user object embedded in the HTTP request. Responds with an array of all users
     DELETE /api/assignment/user/:id
     removes an existing user whose id property is equal to the id path parameter. Responds with an array of all users
     */
    app.post("/api/assignment/user", createUser);
    app.get("/api/assignment/user", getAllUsers);
    app.get("/api/assignment/user/:id", getUserById);
    app.get("/api/assignment/user?username=username", getUserByUsername);
    app.get("/api/assignment/user?username=alice&password=wonderland", getUserByCredentials);
    app.put("/api/assignment/user/:id", updateUserById);
    app.delete("/api/assignment/user/:id", deleteUserById);

    function createUser(req, res) {
        var user = req.body;
        var users = model.createUser(user);
        res.json(users);
    }

    function getAllUsers(req, res) {
        var users = model.findAllUsers();
        res.json(users);
    }

    function getUserById(req, res) {
        var id = req.params.id;
        var user = model.findUserById(id);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "User not found"});
    }

    function getUserByUsername(req, res) {
        var username = req.params.username;
        var user = model.findUserByUsername(username);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "User not found"});
    }

    function getUserByCredentials(req, res) {
        var credentials = {
            username: req.query.username,
            password: req.query.password
        };
        var user = model.findUserByCredentials(credentials);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "User not found"});
    }

    function updateUserById(req, res) {
        var id = req.params.id;
        var user = req.body;
        user = model.updateUser(id, user);
        if (user) {
            res.json(user);
            return;
        }
        res.json({message: "User not found"});
    }

    function deleteUserById(req, res) {
        var id = req.param.id;
        if (model.deleteUser(id)) {
            res.send(200);
            return;
        }
        res.json({message: "User not found"});
    }
};
