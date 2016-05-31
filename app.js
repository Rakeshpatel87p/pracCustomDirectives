var app = angular.module('myApp', [])
	app.directive('optIn', function(){
		return {
			restrict: 'AE',
			transclude: true,
			templateUrl: 'optIn.html'
		}
	})
