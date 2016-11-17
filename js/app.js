/*global define*/
'use strict';

require([
	'angular',
	'controllers/todo',
	'directives/todoFocus',
	'directives/todoEscape',
	'services/todoStorage'
], function (angular, todoCtrl, todoFocusDir, todoEscapeDir, todoStorageSrv) {
	return angular.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv])
		.controller('TodoController', todoCtrl);
});


/*
require([
	'angular',
	'angular-route'
], function (angular, ngRoute) {
	require([
		'controllers/todo',
		'directives/todoFocus',
		'directives/todoEscape',
		'services/todoStorage'
	], function (todoCtrl, todoFocusDir, todoEscapeDir, todoStorageSrv) {
		angular
			.module('todomvc', [todoFocusDir, todoEscapeDir, todoStorageSrv])
			.controller('TodoController', todoCtrl);
		angular.bootstrap(document, ['todomvc']);
	});
});*/