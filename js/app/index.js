(function (angular) {
	'use strict';

	/*buttonLeft directive*/
	angular.module('btnDirective', [])
	/*.controller('Controller',['$scope',function(){
			$scope.btnLeft = 'off';
		}]);*/
	.directive('btnLeft', ['$document',
		function ($document) {
			return function (scope, element, attr) {
				var state = 'off'
				element.on('click', function (event) {
					if (state == 'off') {
						alert('aaa');
						state = 'on';
					} else {
						alert('bbb');
						state = 'off';
					}

				});
			}
		}]);

})(window.angular);