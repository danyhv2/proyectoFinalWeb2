(function(){
var modulePortafolio = angular.module('modulePortafolio', [ 'ngFileUpload', ]);
modulePortafolio.controller('PortafolioCtrl', function($scope, $http, $location,$upload,$timeout, $compile){

		$scope.estudianteActual = 'mrosales@ucenfotec.ac.cr';
        $scope.datosP =[];
            $http.post('php/insertarPortafolio.php',{'nombreC' : $scope.estudianteActual, 'nombreC2' : $scope.estudianteActual, 'nombreC3' : 'Pequeña descripción de sus habilidades.'}).success(function(data){
			 $http.post('php/datosPortafolio.php',{'nombreC' : $scope.estudianteActual}).success(function(data){
	            $scope.temp = data;
            console.log($scope.temp[0].cedula)
				$scope.miNombre= $scope.temp[0].nombre+' '+$scope.temp[0].primerApellido+' '+$scope.temp[0].segundoApellido;
				$scope.miCorreo = $scope.temp[0].correo;
				$scope.miTel = $scope.temp[0].telefono;
				$scope.miFoto = $scope.temp[0].cedula+'.jpg';
				console.log($scope.miFoto)
				$scope.miDesc = $scope.temp[0].descripcion;
            });
            
        	});
		$scope.proyectos=[];
        	$scope.gruposTemp=[];
        	$http.post('php/buscarUsuarioProyecto.php',{'nombreCCC' : $scope.estudianteActual}).success(function(data){
            		$scope.temp2 = data;
            		 $scope.grupoTemp = $scope.temp2; 
           			 for(var p=0; p< $scope.grupoTemp.length;p++){
  					 $scope.gruposTemp.push({nombre : $scope.grupoTemp[p].nombre_grupo,por: $scope.grupoTemp[p].nombre+' '+$scope.grupoTemp[p].primerApellido+' '+$scope.grupoTemp[p].segundoApellido,pagina:'https://www.ucenfotec.ac.cr/',url:'uploads/proyectos/'+$scope.grupoTemp[p].nombre_grupo+'.jpg'});
					$scope.proyectos = $scope.gruposTemp;
  					};
        	});

		$scope.no= false;
		$scope.upload = function (files) {
           if (files && files.length) {
               for (var i = 0; i < files.length; i++) {
                   var file = files[i];
                   Upload.upload({
                       url: 'php/subirFotoPortafolio.php',
                       method:'POST',
                       file: file,
                       fileName:'test3.jpg'
                   }).progress(function (evt) {
                       var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                       console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                   }).success(function (data, status, headers, config) {
                       console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                   });
               }
           }
       };
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
