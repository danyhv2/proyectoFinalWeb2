var moduleProyectos = angular.module('moduleProyectos', []);

moduleProyectos.directive('proyectoInfo', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'views/_proyectoInfo.html',
			controller: 'ProyectoCtrl'
		};
}]);
moduleProyectos.directive('sliderProyectos', [

	function () {
		return {
			restrict: 'E',
			templateUrl: 'views/_contenedorProyectos.html',
			controller: 'ProyectoCtrl'
		};
}]);
moduleProyectos.controller('ProyectoCtrl', ['$scope', 'ControlProyecto',
	function ($scope, ControlProyecto) {
		$scope.proyectos = ControlProyecto.obtenerTodos();
		$scope.enVotacion = true;
}]);


//Servicios
moduleProyectos.factory('ControlProyecto', ['$http',
	function ($http) {
		return {
			obtenerTodos: function () {
				return proyectosData;
			}
		};
}]);
var proyectosData = [{
		nombre: 'Dmg Coders',
		usuario: 'Daniel',
		descripcion: 'WebApp para control de historial de proyecto ',
		imgPreview: 'img/portafolio/juego-pacman.png',
		leerMas: 'http://localhost/ProyectoFinalWeb2/DMGCoders',

			}, {
		nombre: 'Dmg Sliders',
		usuario: 'Daniel',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'http://localhost/ProyectoFinalWeb2/DMGSliders',
		imgPreview: 'img/portafolio/Sodoku.gif'
			},
	{
		nombre: 'Dmg Systems',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'http://localhost/ProyectoFinalWeb2/DMGSystems',
		imgPreview: 'img/portafolio/elsiguiente.jpg',
			}];