/**
 * Created by yangyang on 2/29/16.
 */
(function(){
    angular
        .module("jgaSortable", [])
        .directive("jgaSortable", jgaSortable);

    function jgaSortable(){
        var start = null;
        var end = null;
        function link(scope, element, attribute){
            var jgaAxis = attribute.jgaAxis;
            $(element).sortable({
                axis: jgaAxis,
                start: function(event, ui){
                    start = ui.item.index();
                },
                stop: function(event, ui) {
                    end = ui.item.index();
                    var temp = scope.users[start];
                    scope.users[start] = scope.users[end];
                    scope.users[end] = temp;
                    scope.$apply();
                }
            });
        }
        return {
            link: link
        }
    }
})();