var moduleHome = angular.module('moduleHome', []);
moduleHome.directive('slideshow', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'views/_slideshow.html',
			controller: 'slideshowCtrl'
		};
}]);
moduleHome.controller('slideshowCtrl', ['$scope', '$interval',
	function ($scope, $interval) {
		$scope.imgActive = {
			src: 'img/noticias/noticia.png',
			alt: 'La noticia #1',
			enlace: 'http.'
		};
		$scope.images = [{
				src: 'img/noticias/noticia2.png',
				alt: 'La noticia #2'
	},
			{
				src: 'img/noticias/noticia3.jpg',
				alt: 'La noticia #3'
	}];
}]);