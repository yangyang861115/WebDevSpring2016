/**
 * Created by yangyang on 2/24/16.
 */
(function () {
    angular
        .module("myApp", [])
        .controller("appController", appController)
        .directive("helloWorld", helloWorld)
        .directive("jgaTable", jgaTable)
        .directive("jgaTable2", jgaTable2)
        .directive("jgaTable3", jgaTable3);

    function appController($scope) {
        $scope.users = [{"first":"Alice","last":"Wonderland","email":"alice@email.com"},
            {"first":"Bob","last":"Hope","email":"bob@oscars.com"},
            {"first":"Charlie","last":"Brown","email":"charlie@schultz.com"}];
    }
    function helloWorld() {
        return {
            template: "Hello World"
        };
    }

    function jgaTable() {
        return {
            templateUrl: "jgaTable.html"
        };
    }

    function jgaTable2() {
        return {
            scope: {
                "caption" : "=caption",
                "border": "="
            },
            templateUrl: "jgaTable2.html"
        };
    }

    function jgaTable3() {
        return {
            scope: {
                "caption" : "=caption",
                "border": "=",
                "data": "="
            },
            templateUrl: "jgaTable3.html"
        };
    }
})();