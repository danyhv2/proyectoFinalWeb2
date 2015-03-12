var moduleHome = angular.module('moduleHome', []);
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
				src: 'img/noticias/noticia.png',
				alt: 'La noticia #1',
				indice: 0
	},
			{
				src: 'img/noticias/noticia2.png',
				alt: 'La noticia #2',
				indice: 1
	},
			{
				src: 'img/noticias/noticia3.jpg',
				alt: 'La noticia #3',
				indice: 2
	}];
		$scope.activeImg = {
			src: 'img/noticias/noticia.png',
			alt: 'La notcia #1',
			indice: 0
		}
		$interval(function () {
			$scope.switchImg();
		}, 5000);
		$scope.switchImg = function () {
			console.log('ha deberia de aver cambiado de imagen');
			switch ($scope.activeImg.indice) {
			case 0:
				console.log($scope.activeImg.src = $scope.images[$scope.activeImg.indice + 1].src);
				$scope.activeImg.alt = $scope.images[$scope.activeImg.indice + 1].alt;
				$scope.activeImg.indice = 1;
				break;
			case 1:
				console.log($scope.activeImg.src = $scope.images[$scope.activeImg.indice + 1].src);
				$scope.activeImg.alt = $scope.images[$scope.activeImg.indice + 1].alt;
				$scope.activeImg.indice = 2;
				break;
			case 2:
				console.log($scope.activeImg.src = $scope.images[0].src);
				$scope.activeImg.alt = $scope.images[0].alt;
				$scope.activeImg.indice = 0;
				break;
			}
		}
		$scope.ponerImagen = function (ponerActiva) {
			$scope.activeImg.indice = ponerActiva;
			$scope.switchImg();
		}
}]);