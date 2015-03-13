var modulePortafolio = angular.module('modulePortafolio', []);
modulePortafolio.controller('PortafolioCtrl', ['$scope', 'ControlUsuario', 'ControlProyecto',
	function ($scope, ControlUsuario, ControlProyecto) {
		$scope.usuario = ControlUsuario.obtenerUsuario(0);
		$scope.proyectos = ControlProyecto.obtenerTodos();

		console.log('Este el portafolio');
		console.table($scope.usuario);
		$scope.modificarPortafolio = function () {

		};
		$scope.imprimirPortafolio = function () {
			window.print()
		};
}]);