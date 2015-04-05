var moduleHome = angular.module('moduleHome', ['ngResource','ngRoute']);
moduleHome.directive('slideshow', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'views/_slideshow.html',
			controller: 'slideshowCtrl'
		}
}]);
moduleHome.controller('slideshowCtrl', ['$scope', '$interval',
	function ($scope, $interval) {
		$scope.images = [{
				src: 'img/noticias/noticia2.png',
				alt: 'La noticia #2'
	},
			{
				src: 'img/noticias/noticia3.jpg',
				alt: 'La noticia #3'
	}];
		$scope.imgActive = {
			src: 'img/noticias/noticia.png',
			alt: 'La notcia #1'
		}
}]);

moduleHome.controller("proyectoshomeController", function ($scope, $http, dataResource,$rootScope) {
	$http.get('data/proyectos.json').success(function (data) {
        $scope.Mejoresproyectos = data;

        $("#uno").click(function(){
        	$("#cuatro").removeClass ("hidden");
        	$("#cuatro").addClass ("show");
        	$("#cinco").removeClass ("show");
        	$("#cinco").addClass ("hidden");
        	$("#seis").removeClass ("show");
        	$("#seis").addClass ("hidden");
        });
        $("#dos").click(function(){
        	$("#cinco").removeClass ("hidden");
        	$("#cinco").addClass ("show");
        	$("#cuatro").removeClass ("show");
        	$("#cuatro").addClass ("hidden");
        	$("#seis").removeClass ("show");
        	$("#seis").addClass ("hidden");
        });
        $("#tres").click(function(){
        	$("#seis").removeClass ("hidden");
        	$("#seis").addClass ("show");
        	$("#cuatro").removeClass ("show");
        	$("#cuatro").addClass ("hidden");
        	$("#cinco").removeClass ("show");
        	$("#cinco").addClass ("hidden");
        });

    });
    
    $scope.datosResource = dataResource.get();
});

moduleHome.factory("dataResource", function ($resource) {
    return $resource("data/proyectos.json", 
        { get: { method: "GET", isArray: true }
    })
});

