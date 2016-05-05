'use strict';
module.exports = function (grunt) {
    grunt.config.set('concat', {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },         
            dist: {
                // the files to concatenate
                src: ['app/js/app.js', 'app/js/config.js', 'app/js/services.js', 'app/js/**/*.js'],
                // the location of the resulting JS file
                dest: 'dist/js/built.js'
            }
        }
    );
};