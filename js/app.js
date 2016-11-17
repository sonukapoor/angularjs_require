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