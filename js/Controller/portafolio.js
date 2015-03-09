var modulePortafolio = angular.module('modulePortafolio', []);
modulePortafolio.controller('PortafolioCtrl', ['$scope', 'ControlUsuario',
	function ($scope, ControlUsuario) {
		$scope.usuario = ControlUsuario.obtenerUsuario(0);
		console.log('Este el portafolio');
		console.log($scope.usuaario)
		$scope.modificarPortafolio = function () {

		};
		$scope.imprimirPortafolio = function () {
			jQuery('#portafolio')
				.print();
		}
}]);