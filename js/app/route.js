'use strict';

/*BaseRoute Controller*/
var gmdssApp = angular.module('gmdssApp', [
		'ngRoute'
	]);

gmdssApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
		when('/on', {
			templateUrl: 'partials/vhf.html'
		}).
		otherwise({
			redirectTo: '/on'
		});
	}]);