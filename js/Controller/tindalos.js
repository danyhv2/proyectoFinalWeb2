var tindalos = angular.module('tindalos', ['ui.router','ngResource','ngRoute']);

tindalos.controller('tindalosController', function ($scope, $http, dataResource,$rootScope){

	$http.get('data/proyectos.json').success(function (data) {
        $scope.Mejoresproyectos = data;
    });

    $scope.datosResource = dataResource.get();

    $scope.rating = 0;
    $scope.ratings = [{
        current: 1,
        max: 5
    }];

    $scope.getSelectedRating = function (rating) {
        console.log(rating);
    }

        $scope.validar = function(){
    	$('#modalExitoVotacion').fadeIn(1000);
    	$('#modalExitoVotacion').fadeOut(4000);
    }
}); 

tindalos.factory("dataResource", function ($resource) {
    return $resource("data/proyectos.json", 
        { get: { method: "GET", isArray: true }
    })
});

tindalos.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});