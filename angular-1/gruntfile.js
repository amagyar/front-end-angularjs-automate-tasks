module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);
    require('./grunt/clean')(grunt);
    require('./grunt/concat')(grunt);
    require('./grunt/copy')(grunt);
    require('./grunt/uglify')(grunt);
    require('./grunt/ng-annotate')(grunt);
    require('./grunt/hashres')(grunt);

    grunt.registerTask('build', function () {
        grunt.task.run(['clean', 'copy', 'concat', 'ngAnnotate', 'uglify', 'hashres']);
    });

};
