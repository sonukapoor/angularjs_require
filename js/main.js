/*global require*/
'use strict';

require.config({
    paths: {
        'requireLib': 'node_modules/requirejs/require',
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'bootstrap': '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
        'angular-animate': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-animate',
        'angular-cookies': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-cookies',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-route',
        'angular-sanitize': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-sanitize',
        'angular-touch': '//ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular-touch',
    },
    include: ['requireLib', 'app'],
    priority: [
        'angular'
    ],
    shim: {
        'angular': { exports: 'angular' },
        'bootstrap': ['jquery'],
        'angular-animate': { deps: ['angular'] },
        'angular-route': { deps: ['angular'] },
        'angular-cookies': { deps: ['angular'] },
        'angular-sanitize': { deps: ['angular'] },
        'angular-touch': { deps: ['angular'] }
    }
});

window.name = 'NG_DEFER_BOOTSTRAP!';

require([
    'jquery',
    'bootstrap',
    'angular',
    'angular-route',
    'angular-cookies',
    'angular-sanitize',
    'angular-animate',
    'angular-touch'
], function($, bootstrap, angular, ngRoute, ngCookies, ngSanitize, ngAnimate, ngTouch) {
    'use strict';
    angular.element().ready(function() {
        //angular.bootstrap(document, ['todomvc']);
				angular.resumeBootstrap(['todomvc']);
    });
});