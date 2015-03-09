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
		descripcion: 'WebApp para control de historial de proyecto ',
		leerMas: 'http: //google.com',

			}, {
		nombre: 'Dmg Sliders',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'http://yahoo.com'
			},
	{
		nombre: 'Dmg Sliders',
		descripcion: 'WebApp para control de historial de proyecto',
		leerMas: 'http://yahoo.com'
			}];