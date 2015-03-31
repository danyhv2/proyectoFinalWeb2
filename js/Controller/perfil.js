var perfilModule = angular.module('modulePerfil', []);

perfilModule.controller('PerfilCtrl', ['$scope', 'ControlUsuario',
	function ($scope, ControlUsuario) {
		$scope.usuario = ControlUsuario.obtenerUsuario(1);
		$scope.actualizarDatos = function (usuario) {
			if($scope.editPerfil.$valid){
			ControlUsuario.modificarUsuario(0, $scope.usuario.foto, $scope.usuario.correoElectronico, $scope.usuario.telefono, $scope.usuario.celular, $scope.usuario.descripcion, $scope.usuario.direccionExacta);
			}
		};

}]);
perfilModule.factory('ControlUsuario', ['$http', '$log',
	function ($http, $log) {
		return {
			obtenerUsuario: function (indice) {
				return usuarioData[indice];
			},
			modificarUsuario: function (indice, foto, correoElectronico, telefono, celular, descripcion, direccionExacta) {

				if (foto == '' || correoElectronico == '' || telefono == '' || celular == '' || descripcion == '' || direccionExacta == '') {
					console.log('Esta vacio, revisa');
				} else {
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
			}

		};
}]);

//datos Quemados

var usuarioData = [
	{
		foto: 'img/user-2-32.png',
		carrera: 'Diseño y Desarrollo Web',
		nombre: 'Daniel',
		primerApellido: 'Campos',
		segundoApellido: 'Arce',
		fechaNacimiento: {
			full: '13 de marzo del 1994',
			small: '13-03-1994'
		},
		correoElectronico: 'dcamposa@ucenfotec.ac.cr',
		telefono: 22563450,
		celular: 89770980,
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
		foto: 'img/user100.png',
		carrera: 'Diseño y Desarrollo Web',
		nombre: 'Melisa Rosales Quiros',
		fechaNacimiento: '20 de agosto del 1993',
		correoElectronico: 'mrosalesv@ucenfotec.ac.cr',
		telefono: 22563450,
		celular: 89770980,
		descripcion: 'Mi nombre es Daniela y me encanta estar actualiza con las últimas tecnologías que hay en el mercado. Etiam varius sapien ut velit luctus ultricies. Donec auctor lacus nec ultricies blandit. Morbi condimentum massa sed orci commodo, at cursus massa varius.',
		direccionExacta: 'San José, Costa Rica',
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