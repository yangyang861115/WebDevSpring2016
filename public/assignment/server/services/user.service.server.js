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
    app.post("/api/assignment/user/login", login);
    app.post("/api/assignment/user/logout", logout);
    app.get("/api/assignment/user", getAllUsers);
    app.get("/api/assignment/user/:id", getUserById);
    app.get("/api/assignment/user/check/loggedin", loggedin);
    app.get("/api/assignment/user/profile/:username", getUserByUsername);
    app.put("/api/assignment/user/:id", updateUserById);
    app.delete("/api/assignment/user/:id", deleteUserById);

    function createUser(req, res) {
        var user = req.body;
        user = model.createUser(user);
        req.session.currentUser = user;
        res.json(user);
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
        res
            .status(404)
            .send({
                "success": false,
                "message": "User not found"
            });
    }

    function login(req, res) {
        var user = req.body;
        var credentials = {
            username: user.username,
            password: user.password
        };

        var user = model.findUserByCredentials(credentials);
        req.session.currentUser = user;
        if (user) {
            res.json(user);
            return;
        }
        res
            .status(404)
            .send({
                "success": false,
                "message": "User not found or Incorrect password!"
            });
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function loggedin(req, res) {
        res.json(req.session.currentUser);
    }

    function updateUserById(req, res) {
        var id = req.params.id;
        var user = req.body;

        user = model.updateUser(id, user);

        if (user) {
            res.json(user);
            return;
        }
        res.status(400)
            .send({
                error: "Something went wrong! Update was not saved."
            });
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
