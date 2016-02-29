/**
 * Created by yangyang on 2/29/16.
 */
(function(){
    angular
        .module("SortableApp", ["jgaSortable"])
        .controller("SortableController", SortableController);

    function SortableController($scope){
        $scope.users = [
            {first: "Alice", last: "wanderland"},
            {first: "Bob", last: "Hope"},
            {first: "Charlie", last: "Brown"}
        ];
    }
})();