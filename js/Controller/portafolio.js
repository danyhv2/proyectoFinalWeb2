var modulePortafolio = angular.module('modulePortafolio', []);
modulePortafolio.controller('PortafolioCtrl', ['$scope', 'ControlUsuario', 'ControlProyecto',
	function ($scope, ControlUsuario, ControlProyecto) {
		$scope.usuario = ControlUsuario.obtenerUsuario(0);
		$scope.proyectos = ControlProyecto.obtenerTodos();

		console.log('Este el portafolio');
		console.log($scope.usuario);
		$scope.modificarPortafolio = function () {
			if (jQuery('#email')
				.val() !== '') {
				// alert("El correo no esta vacio");
				jQuery('#modificarPortafolio')
					.modal('hide');
			}
		};
		$scope.imprimirPortafolio = function () {
			window.print()
		};
}]);