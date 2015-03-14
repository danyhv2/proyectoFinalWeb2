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
		$scope.proyectoEnVotacion = $scope.proyectos[0];

		$scope.proyectoSelecionado = function (proyecto) {
			$scope.proyectoEnVotacion = proyecto;
		}
}]);


//Servicios
moduleProyectos.factory('ControlProyecto', ['$http',
	function ($http) {
		return {
			obtenerTodos: function (cantidadDeProyectos) {
				return proyectosData;
			}
		};
}]);
var proyectosData = [{
		nombre: 'Dmg Coders',
		usuario: 'Daniel',
		descripcion: 'WebApp para control de historial de proyecto ',
		imgPreview: 'img/portafolio/juego-pacman.png',
		leerMas: 'ProyectoEnVotacion',

			}, {
		nombre: 'Dmg Sliders',
		usuario: 'Daniel',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'ProyectoEnVotacion',
		imgPreview: 'img/portafolio/Sodoku.gif'
			},
	{
		nombre: 'Dmg Systems',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'ProyectoEnVotacion',
		imgPreview: 'img/portafolio/elsiguiente.jpg',
			}];