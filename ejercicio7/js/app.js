var myApp=angular.module('myApp',[
	'ngRoute',
	'artistController'

]);

myApp.config(['$routeProvider', function($routerProvider){
	$routerProvider.
	when('/list',{
		templateUrl: 'partials/list.html',
		controller: 'ListController'
	}).
	when('/details/:itemId',{
		templateUrl: 'partials/details.html',
		controller: 'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'

	});
}]);