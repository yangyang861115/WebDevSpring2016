(function(){
    angular
        .module("WhiteBoardApp")
        .factory("CourseService", CourseService);

    function CourseService($http){
        var api = {
            findAllCourses: findAllCourses,
            findCourseById: findCourseById,
            removeCourseById: removeCourseById,
            createCourse: createCourse,
            updateCourseById: updateCourseById
        };
        return api;

        function findAllCourses(callback){
            $http
                .get("/rest/course")
                .success(callback);
        }

        function findCourseById(id, callback) {
            $http
                .get("/rest/course/" + id)
                .success(callback);
        }

        function removeCourseById(id, callback) {
            $http
                .delete("/rest/course/" + id)
                .success(callback);
        }

        function createCourse(course, callback) {
            $http
                .post("/rest/course", course)
                .success(callback);
        }

        function updateCourseById(id,course, callback) {
            $http
                .put("/rest/course/" + id, course)
                .success(callback);
        }
    }
})();