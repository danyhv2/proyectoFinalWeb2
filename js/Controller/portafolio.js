(function(){
var modulePortafolio = angular.module('modulePortafolio', []);
modulePortafolio.controller('PortafolioCtrl', function($scope, $http, $location){

	
		$scope.miNombre= 'Roy Solera Quiros';
		$scope.miCorreo = 'sq16roy@gmail.com';
		$scope.miTel = '86108951';
		$scope.miDir = 'San Ramon, Alajuela, Costa Rica';
		$scope.miFoto = 'https://lh4.googleusercontent.com/-zs7WY0lop4A/AAAAAAAAAAI/AAAAAAAAAJI/8IyIZpVLAJE/photo.jpg';
		$scope.miDesc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Nuevo trabajo';

		$scope.proyectos=[
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'https://carlosazaustre.es/blog/content/images/2014/12/angular_bg1-3.png'},
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.md-imagen.com/wp-content/uploads/2013/07/Screen%20shot%202013-07-09%20at%204.54.43%20PM-1024x647.png'},
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.md-imagen.com/wp-content/uploads/2013/07/Screen%20shot%202013-07-09%20at%204.54.43%20PM-1024x647.png'},
		{nombre:'Cool Stuff',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.seuba.com/web/wp-content/uploads/2012/12/img-contenido-web-diseno1.jpg'},
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.md-imagen.com/wp-content/uploads/2013/07/Screen%20shot%202013-07-09%20at%204.54.43%20PM-1024x647.png'},	
		{nombre:'Compu mundo',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://d1qv53vvfy0ptp.cloudfront.net/wp-content/uploads/di/2013/02/12-fascinating-portfolio-websites-1.jpg'}
		
		
		];
		$scope.no= false;
		$scope.imprimirPortafolio = function () {
			$scope.no= true;
			$scope.imprimirPortafolio2 = function () {
			$scope.no= false;
			};
		};
			$scope.imprimirPortafolio3 = function () {
				window.print();
			};
		$scope.go = function ( path ) {
  			$location.path( path );
  			//<button ng-click="go('#home')" class="btn simpleColor">aa</button>
		};
		$scope.borrarTrabajo = function ( proyecto ) {
  			var i = $scope.proyectos.indexOf(proyecto);
			$scope.proyectos.splice(i,1);
			$('#modalTrabajoB').fadeIn(1000);
         	$('#modalTrabajoB').fadeOut(1000);
			
		};
		$scope.agregarTrabajo = function () {
				if ($scope.nombreProyecto == '') {
    				$('#errorEstudiante').detach();
    				$('input#nombreProyecto').before('<span id="errorEstudiante" class="" style="color:#f44336;">El nombre no puede estar vacío</span>');
    			}else if ($scope.hechoPor == '') {
    				$('#errorEstudiante').detach();
    				$('input#hechoPor').before('<span id="errorEstudiante" class="" style="color:#f44336;">Debe digitar el nombre del autor</span>');
    			}else if ($scope.urlImagen == '') {
    				$('#errorEstudiante').detach();
    				$('input#urlImagen').before('<span id="errorEstudiante" class="" style="color:#f44336;">Digite el url de una imagen</span>');
    			}else if ($scope.tecnologias == '') {
    				$('#errorEstudiante').detach();
    				$('input#tecnologias').before('<span id="errorEstudiante" class="" style="color:#f44336;">Digite las tecnologias usadas</span>');
    			}else if ($scope.urlPagina == '') {
    				$('#errorEstudiante').detach();
    				$('input#urlPagina').before('<span id="errorEstudiante" class="" style="color:#f44336;">Digite el url de la página</span>');
    			}else if ($scope.nombreProyecto == undefined) {
    				$('#errorEstudiante').detach();
    				$('input#nombreProyecto').before('<span id="errorEstudiante" class="" style="color:#f44336;">El nombre no puede estar vacío</span>');
    			}else if ($scope.hechoPor == undefined) {
    				$('#errorEstudiante').detach();
    				$('input#hechoPor').before('<span id="errorEstudiante" class="" style="color:#f44336;">Debe digitar el nombre del autor</span>');
    			}else if ($scope.urlImagen == undefined) {
    				$('#errorEstudiante').detach();
    				$('input#urlImagen').before('<span id="errorEstudiante" class="" style="color:#f44336;">Digite el url de una imagen</span>');
    			}else if ($scope.tecnologias == undefined) {
    				$('#errorEstudiante').detach();
    				$('input#tecnologias').before('<span id="errorEstudiante" class="" style="color:#f44336;">Digite las tecnologias usadas</span>');
    			}else if ($scope.urlPagina == undefined) {
    				$('#errorEstudiante').detach();
    				$('input#urlPagina').before('<span id="errorEstudiante" class="" style="color:#f44336;">Digite el url de la página</span>');
    			}else{
					$scope.proyectos.push({nombre:$scope.nombreProyecto, por:$scope.hechoPor, url:$scope.urlImagen, tecnologias:$scope.tecnologias, pagina:$scope.urlPagina});
					$scope.nombreProyecto= '';
					$scope.hechoPor= '';
					$scope.urlImagen= '';
					$scope.tecnologias= '';
					$scope.urlPagina= '';
					$('#modalTrabajo').fadeIn(2000);
		         	$('#modalTrabajo').fadeOut(3000);
	    			$('#errorEstudiante').detach();
	    			$('#mostrarPortafolio').fadeOut(400);
	    			$('div.modal-backdrop').fadeOut(400);	
    			}
		};
		$scope.ver= function(){
			$('#mostrarPortafolio').fadeIn(400);
	    	$('div.modal-backdrop').fadeIn(400);	
		};
		$scope.limpiar = function(){
			$scope.nombreProyecto= '';
			$scope.hechoPor= '';
			$scope.urlImagen= '';
			$scope.tecnologias= '';
			$scope.urlPagina= '';
    		$('#errorEstudiante').detach();

		};
		$scope.editarInfo = function (nombre,correo,tel,descrip) {
			$('#errorEstudiante').detach();
			$('div.modal-backdrop').fadeIn(400);
			$('#editarInfo').fadeIn(400);
			//$scope.no2= false;
			console.log(nombre+correo+tel);
			var letras = /^[a-zA-Z_áéíóúñ\s]*$/;
			var email = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
			var numeros = /^[0-9-()+]{3,20}/;
			var misLetras = new RegExp(letras);
			var misCorreos = new RegExp(email);
			var misNumeros = new RegExp(numeros);
    		$scope.miNombre2 = nombre;
    		$scope.miCorreo2 = correo;
    		$scope.miTel2 = tel;
    		$scope.miDesc2 = descrip;
    		$scope.editarInfo2 = function (){
    			$('#errorEstudiante').detach();
    			if ($scope.miNombre2 == '') {
    				$('#errorEstudiante').detach();
    				$('input#nombre').before('<span id="errorEstudiante" class="" style="color:#f44336;">El nombre no puede estar vacío</span>');
    			}else if (misLetras.test($scope.miNombre2)!= true){
    				$('#errorEstudiante').detach();
    				$('input#nombre').before('<span id="errorEstudiante" class="" style="color:#f44336;">El nombre solo puede contener letras</span>');
    				$scope.miNombre2 = '';
    			}else if ($scope.miCorreo2 == '') {
    				$('#errorEstudiante').detach();
    				$('input#correo').before('<span id="errorEstudiante" class="" style="color:#f44336;">El correo no puede estar vacío</span>');
    			}else if (misCorreos.test($scope.miCorreo2)!= true) {
    				$('#errorEstudiante').detach();
    				$('input#correo').before('<span id="errorEstudiante" class="" style="color:#f44336;">Debe ingresar un correo válido</span>');
    				$scope.miCorreo2 = '';
    			}else if ($scope.miTel2 == '') {
    				$('#errorEstudiante').detach();
    				$('input#tel').before('<span id="errorEstudiante" class="" style="color:#f44336;">El teléfono no puede estar vacío</span>');
    			}else if (misNumeros.test($scope.miTel2)!= true) {
    				$('#errorEstudiante').detach();
    				$('input#tel').before('<span id="errorEstudiante" class="" style="color:#f44336;">El número de télefono solo puede contener números</span>');
    				$scope.miTel2 = '';
    			}else if ($scope.miDesc2 == '') {
    				$('#errorEstudiante').detach();
    				$('textarea#desc').before('<span id="errorEstudiante" class="" style="color:#f44336;">La descripción no puede estar vacío</span>');
    			}else{
					$('#errorEstudiante').detach();
					$scope.miNombre= $scope.miNombre2;
					$scope.miCorreo = $scope.miCorreo2;
					$scope.miTel = $scope.miTel2;
					$scope.miDir = $scope.miDir2;
					$scope.miFoto = $scope.miFoto2;
					$scope.miDesc = $scope.miDesc2;
					$('#modalTrabajoB2').fadeIn(2000);
	         		$('#modalTrabajoB2').fadeOut(3000);
	         		//$scope.no2= true;
	         		$('#editarInfo').fadeOut(400);
	         		$('div.modal-backdrop').fadeOut(400);    			}
    		};
		};

});
})();