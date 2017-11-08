// App
var app = angular.module('app', []);

// // Controller
app.controller('filmsCtrl', function($scope, $http) {
	// Get Films
	$http.get("https://swapi.co/api/films/").then(function (response) {
		$scope.films = response.data.results;
	});
});
