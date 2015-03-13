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
		nombre: 'DMG Coders',
		usuario: 'Daniel',
		curso: 'Programación Web Dinamica',
		nombreDeProyecto: 'PacMan',
		descripcion: 'Juego interactivo basado en html5',
		imgPreview: 'img/portafolio/juego-pacman.png',
		leerMas: 'http://localhost/ProyectoFinalWeb2/#/Proyecto',

			}, {
		nombre: 'Dmg Sliders',
		usuario: 'Daniel',
		curso: '',
		nombreDeProyecto: 'Sodoku',
		descripcion: 'Juego de razonamiento en la web',
		leerMas: 'http://localhost/ProyectoFinalWeb2/#/Proyecto',
		imgPreview: 'img/portafolio/Sodoku.gif'
			},
	{
		nombre: 'Dmg Systems',
		usuario: 'Melisa',
		nombreDeProyecto: 'La calculadora',
		descripcion: 'Juego de calculos para agilizar la mente',
		leerMas: 'http://localhost/ProyectoFinalWeb2/#/Proyecto',
		imgPreview: 'img/portafolio/elsiguiente.jpg',
			}];