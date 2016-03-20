/**
 * Created by yangyang on 3/20/16.
 */
(function(){
    angular
        .module("WhiteBoardApp")
        .controller("CourseController", CourseController);

    function CourseController($scope, CourseService){
        $scope.selectCourse = selectCourse;
        $scope.deleteCourse = deleteCourse;
        $scope.createCourse =  createCourse;
        $scope.updateCourse = updateCourse;

        CourseService
            .findAllCourses(function(response){
                $scope.courses = response;
            });

        function selectCourse(id) {
            CourseService.findCourseById(id, function(response){
                $scope.course = response[0];
                $scope.course.starts = new Date($scope.course.starts);
            });
        }

        function deleteCourse(id) {
            CourseService.removeCourseById(id, function(courses){
                $scope.courses = courses;
            });
        }

        function createCourse(course) {
            CourseService.createCourse(course, function(courses){
                $scope.courses = courses;
                $scope.course = null;
            })
        }

        function updateCourse(course) {
            CourseService.updateCourseById(course._id, course, function(courses){
                $scope.courses = courses;
                $scope.course = null;
            })
        }

    }
})();