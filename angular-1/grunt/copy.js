'use strict';
module.exports = function (grunt) {
    grunt.config.set('copy', {
        index: {
            cwd: 'app/',
            src: 'index_dist.html',
            dest: 'dist/',
            rename: function (dest, src) {
                return dest + src.replace('_dist', '');
            },
            expand: true
        },
        app: {
            cwd: 'app/css/',
            src: 'app.css',
            dest: 'dist/css/',
            expand: true
        },
        html: {
            cwd: 'app/views/',
            src: '**/*',
            dest: 'dist/views/',
            expand: true
        },
        imgs: {
            cwd: 'app/img/',
            src: '**/*',
            dest: 'dist/img/',
            expand: true
        },
        vendors: {
            cwd: 'app/vendors/',
            src: '**/*',
            dest: 'dist/vendors/',
            expand: true
        }
    });
};