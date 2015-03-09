var perfilModule = angular.module('modulePerfil', []);

perfilModule.controller('PerfilCtrl', ['$scope', 'ControlUsuario',
	function ($scope, ControlUsuario) {
		$scope.usuario = ControlUsuario.obtenerUsuario(0);
		console.log($scope.usuario);
		$scope.actualizarDatos = function (usuario) {
			ControlUsuario.modificarUsuario(0, $scope.foto, $scope.carrera, $scope.nombre, $scope.primerApellido, $scope.segundoApellido, $scope.correoElectronico, $scope.telefono, $scope.celular, $scope.descripcion, $scope.direccionExacta);
			console.log($scope.foto);
			jQuery('#modificarPerfil')
				.modal('hide');
		}

}]);
perfilModule.factory('ControlUsuario', ['$http', '$log',
	function ($http, $log) {
		return {
			obtenerUsuario: function (indice) {
				return usuarioData[indice];
			},
			modificarUsuario: function (indice, foto, carrera, nombre, primerApellido, segundoApellido, correoElectronico, telefono, celular, descripcion, direccionExacta) {
				usuarioData[indice].foto = foto;
				usuarioData[indice].carrera = carrera;
				usuarioData[indice].nombre = nombre;
				usuarioData[indice].primerApellido = primerApellido;
				usuarioData[indice].segundoApellido = segundoApellido;
				usuarioData[indice].correoElectronico = correoElectronico;
				usuarioData[indice].telefono = telefono;
				usuarioData[indice].celular = celular;
				usuarioData[indice].descripcion = descripcion;
				usuarioData[indice].direccionExacta = direccionExacta;
				$log.info(usuarioData[indice]);
			}

		};
}])

//datos Quemados

var usuarioData = [
	{
		foto: 'img/user-2-32.png',
		carrera: 'Diseño y Desarrollo Web',
		nombre: 'Daniel',
		primerApellido: 'Campos',
		segundoApellido: 'Arce',
		correoElectronico: 'dcamposa@ucenfotec.ac.cr',
		telefono: 22563450,
		celular: 89770980,
		descripcion: 'Amante logo de la programación',
		direccionExacta: 'San isidro de heredia',
		tipo: 'Profesor'
},
	{
		foto: 'img/user-32.png',
		carrera: 'Diseño y Desarrollo Web',
		nombre: 'Melisa Rsoales Quiros',
		correoElectronico: 'mrosalesv@ucenfotec.ac.cr',
		telefono: 22563450,
		celular: 89770980,
		descripcion: 'Amante logo de la programación',
		direccionExacta: 'San isidro de heredia',
		tipo: 'usuario'
}
];