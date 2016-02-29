/**
 * Created by yangyang on 2/28/16.
 */
(function () {
    angular
        .module("myApp", [])
        .controller("CourseController", CourseController);
    function CourseController($scope, CourseService) {

        CourseService.readAllCourses(renderCourses);

        function renderCourses(response) {
            $scope.courses = response;
        }

        $scope.selectCourse = selectCourse;
        $scope.removeCourse = removeCourse;
        $scope.updateCourse = updateCourse;
        $scope.createCourse = createCourse;

        function selectCourse(index) {
            $scope.selectedCourseIndex = index;
            CourseService.readOneCourseById(index, function (response) {
                $scope.course = response;
            });
        }

        function removeCourse(index) {
            CourseService.deleteCourseById(index, renderCourses);
        }

        function updateCourse(course) {
            CourseService.updateCourseById($scope.selectedCourseIndex, course, renderCourses);
        }

        function createCourse(course) {
            CourseService.createCourse(course, renderCourses);
        }
    }
})();
