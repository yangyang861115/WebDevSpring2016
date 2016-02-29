/**
 * Created by yangyang on 2/28/16.
 */
(function () {
    angular
        .module("myApp")
        .factory("CourseService", CourseService);
    function CourseService($http) {
        var api = {
            createCourse: createCourse,
            readAllCourses: readAllCourses,
            readOneCourseById: readOneCourseById,
            deleteCourseById: deleteCourseById,
            updateCourseById: updateCourseById
        };

        return api;

        function readAllCourses(callback) {
            $http
                .get('/rest/course')
                .success(callback);
        }

        function readOneCourseById(id, callback) {
            $http
                .get('/rest/course/'+id)
                .success(callback);
        }

        function deleteCourseById(id, callback) {
            $http
                .delete('/rest/course/'+id)
                .success(callback);
        }

        function updateCourseById(id, course, callback) {
            $http
                .put('/rest/course/'+id, course)
                .success(callback);
        }

        function createCourse(course, callback) {
            $http
                .post('/rest/course/', course)
                .success(callback);
        }
    }
})();