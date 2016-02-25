/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("FormBuilderApp")
        .config(configuration);

    function configuration($routeProvider){
        $routeProvider
            .when("/home", {
                templateUrl: "views/home/home.view.html"
                //,
                //controller: "views/home/home.controller.js"
            })
            .when("/register", {
                templateUrl: "views/users/register.view.html"
                //,
                //controller: "views/home/home.controller.js"
            })
            .when("/login", {
                templateUrl: "views/users/login.view.html"
                //,
                //controller: "views/home/home.controller.js"
            })
            .when("/profile", {
                templateUrl: "views/users/profile.view.html"
                //,
                //controller: "views/home/home.controller.js"
            })
            .when("/admin", {
                templateUrl: "views/admin/admin.view.html"
                //,
                //controller: "views/home/home.controller.js"
            })
            .when("/forms", {
                templateUrl: "views/forms/forms.view.html"
                //,
                //controller: "views/home/home.controller.js"
            })
            .otherwise({
                redirectTo: "/home"
            });

    }
})();

