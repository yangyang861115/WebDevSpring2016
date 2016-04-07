/**
 * Created by yangyang on 4/6/16.
 */
angular.module("MyApp", [])
    .controller("ProductController", productController)
    .controller("StudentController", studentController)
    .directive("myFirstDirective", myFirstDirective)
    .directive("mySecondDirective", mySecondDirective)
    .directive("myThirdDirective", myThirdDirective);

function productController($scope){
    $scope.name = "Yang";
    $scope.product = {
        name: "product 1",
        price: 3.99
    };
    $scope.data = {
        name: "mac",
        price: 1000,
        avaliable : true
    };

}

function myFirstDirective(){
    return {
        templateUrl: "ProductTemplate.html",
        replace: true,
        restrict: "E"
    }
}

function studentController($scope){
    $scope.student = {
        name: "Yang Yang",
        gender: "female",
        subjects: [
            "math", "geography"
        ]
    };
    $scope.getGrade = function(student){
        student.grade = "A+";
    }
}

function mySecondDirective(){
    return {
        templateUrl: "StudentTemplate.html",
        replace: true,
        restrict: "AE",
        controller :function($scope) {
            $scope.setGrade = function(student){
                student.grade = "A+";
            };
        }
    }
}

function myThirdDirective(){
    return {
      restrict: "E",
        scope: {
            name: '@',
            price: '@',
            data: '='
        },
        template: '<div><h3>{{name}} costs {{price}} </h3>' +
        '<button class="btn btn-danger" ng-click="name=\'TV\'">Set </button></div>' +
        '<pre>{{data | json}}</pre>'
    };
}

