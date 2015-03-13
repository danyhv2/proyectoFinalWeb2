var perfilModule = angular.module('modulePerfil', []);

perfilModule.controller('PerfilCtrl', ['$scope', 'ControlUsuario',
	function ($scope, ControlUsuario) {
		$scope.usuario = ControlUsuario.obtenerUsuario(0);
		console.table($scope.usuario);
		$scope.actualizarDatos = function (usuario) {

			if ($scope.usua)
				ControlUsuario.modificarUsuario(0, $scope.usuario.foto, $scope.usuario.correoElectronico, $scope.usuario.telefono, $scope.usuario.celular, $scope.usuario.descripcion, $scope.usuario.direccionExacta);
			console.log($scope.usuario.foto);
		};

}]);
perfilModule.factory('ControlUsuario', ['$http', '$log',
	function ($http, $log) {
		return {
			obtenerUsuario: function (indice) {
				return usuarioData[indice];
			},
			modificarUsuario: function (indice, foto, correoElectronico, telefono, celular, descripcion, direccionExacta) {

				usuarioData[indice].foto = foto;
				usuarioData[indice].correoElectronico = correoElectronico;
				usuarioData[indice].telefono = telefono;
				usuarioData[indice].celular = celular;
				usuarioData[indice].descripcion = descripcion;
				usuarioData[indice].direccionExacta = direccionExacta;
				$log.info(usuarioData[indice]);
				jQuery('#modificarPerfil')
					.modal('hide');

			}

		};
}]);

//datos Quemados

var usuarioData = [
	{
		foto: 'img/user-32.png',
		carrera: 'Diseño y Desarrollo Web',
		nombre: 'Daniel',
		primerApellido: 'Campos',
		segundoApellido: 'Arce',
		correoElectronico: 'dcamposa@ucenfotec.ac.cr',
		telefono: 22563450,
		celular: 89770980,
		fechaNacimiento: '13/03/1994',
		descripcion: 'Amante logo de la programación',
		direccionExacta: 'San isidro de heredia',
		tipo: 'Profesor',
		cursos: [{
			nombre: 'Programación Web Dinamica',
			nota: 92,
			periodo: 'Cuatrimestre 1 2014'
		}, {
			nombre: 'Tecnologias avanzadas de programación',
			nota: 100,
			periodo: 'Cuatrimestre 2 2014'
		}],
		proyectos: [{
			nombre: 'Dmg Coders',
			grupo: 'Dmg Coders',
			periodo: 'Cuatrimestre 1 2014'
		}, {
			nombre: 'MovilApp',
			grupo: 'Dmg Systems',
			periodo: 'Cuatrimestre 2 2014'
		}]
},
	{
		foto: 'img/user-2-32.png',
		carrera: 'Diseño y Desarrollo Web',
		nombre: 'Melisa Rsoales Quiros',
		correoElectronico: 'mrosalesv@ucenfotec.ac.cr',
		telefono: 22563450,
		celular: 89770980,
		descripcion: 'Amante logo de la programación',
		direccionExacta: 'San isidro de heredia',
		tipo: 'usuario',
		cursos: [{
			nombre: 'Diseño Digital 2',
			nota: 92,
			periodo: 'Cuatrimestre 2 2014'
		}, {
			nombre: 'Tecnologias avanzadas de programación',
			nota: 100,
			periodo: 'Cuatrimestre 2 2014'
		}]
}
];