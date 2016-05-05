(function () {
    angular.module('services', ['ngResource'])

        .service('getPeople', function ($resource) {
            return $resource('http://localhost:8090/rest/people');
        })

})();