'use strict';
(function () {
    angular.module('app', [
        'ngResource',
        'ui.router',
        'controllers',
        'services'
    ])

        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/people");

            $stateProvider
                .state('people', {
                    url: '/people',
                    templateUrl: './views/people.html'
                })
        })

})();