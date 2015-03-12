(function(){
						<!--//crear app-->
	var modulo = angular.module('crearGrupo', []);
						<!--//fin crear app-->

						<!--//inicio controller-->
		modulo.controller('gruposController', function($scope, $http){
			
						<!--//arreglo estudiantes-->
			$scope.estudiantes = [
			{
				miName : 'Roy Solera Quiros',
				compañeros : 'Zatan'
			},
			{
				miName : 'Guillermo Sánchez Garay'
			},
			{
				miName : 'Daniel Campos Arce'
			},
			{
				miName : 'Daniela Hernández Villafuerte'
			},
			{
				miName : 'Melissa Rosales Mora'
			}
			];
			$scope.proyectos = [
			{
				proyectoName : 'proyecto #1',
				integrantes :['Roy Solera Quiros', 'Guillermo Sánchez']
			},
			{
				proyectoName : 'proyecto #2',
				integrantes :['Daniela Hernández Villafuerte', 'Melissa Rosales Mora']
			},
			{
				proyectoName : 'proyecto #3',
				integrantes :['Daniel Campos Arce', 'Guillermo Sánchez']
			},
			{
				proyectoName : 'proyecto #4',
				integrantes :['Roy Solera Quiros', 'Daniel Hernández Villafuerte']
			},
			{
				proyectoName : 'proyecto #5',
				integrantes :['Daniel Hernández Villafuerte', 'Melissa Rosales Mora']
			}
			];
			$scope.opciones = [
			{
				opcion : 'si'
			},
			{
				opcion : 'no'
			}

			];
				$scope.GruposArchivos = [
			{
				gPName : 'Grupo#1',
				archivos :['Tarea#1', 'Tarea#2', 'Tarea#3']
			},
			{
				gPName : 'Grupo#2',
				archivos :['Tarea#4', 'Tarea#5']
			},
			{
				gPName : 'Grupo#3',
				archivos :['Tarea#6', 'Tarea#7']
			},
			{
				gPName : 'Grupo#4',
				archivos :['Tarea#8', 'Tarea#9']
			},
			{
				gPName : 'Grupo#5',
				archivos :['Tarea#10', 'Tarea#11']
			}
			];
			console.log($scope.proyectos);

						<!--//fin arreglo estudiantes-->

						<!-- //arreglo vacios-->
			$scope.grupos = [
			];
			$scope.muchos = [];
			$scope.muchos2 = [];
			$scope.temps =[];
			$scope.enviarProyectos =[];
						<!-- //arreglo vacios-->

						<!-- //funcion ordenar tabla de grupos-->
			$scope.ordenar= function(orden){
				$scope.ordenSeleccionado = orden;
			};
						<!-- //fin funcion ordenar tabla de grupos-->

						<!-- //funcion agregar estudiantes a arreglo vacio-->
			$scope.addEstudiante=function(){
				if ($scope.nuevoEstudiante == undefined) {
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('select#estudiantes').after('<span id="errorEstudiante" class="bg-danger text-danger">Debe seleccionar un estudiante</span>');
				}else if ($scope.nuevoEstudiante == ''){
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('select#estudiantes').after('<span id="errorEstudiante" class="bg-danger text-danger">Debe seleccionar un estudiante</span>');
				}else if($scope.nuevoRole == undefined){
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('select#roles').after('<span id="errorRoles" class="bg-danger text-danger">Debe seleccionar un role</span>');
				}else if ($scope.nuevoRole == ''){
					$('select#roles').after('<span id="errorRoles" class="bg-danger text-danger">Debe seleccionar un role</span>');
				}else{
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$scope.muchos.push({nombre:$scope.nuevoEstudiante.miName, role:$scope.nuevoRole});
					console.log($scope.nuevoEstudiante);
					console.log($scope.muchos);
					console.log($scope.muchos.length);
					$scope.nuevoEstudiante ='';
					$scope.nuevoRole ='';
				}
			};
						<!-- //fin funcion agregar estudiantes a arreglo vacio-->

						<!-- //funcion agregar nombre de y role de estudiantes a arreglo vacio-->
			$scope.addGrupo=function(){			
      	if ($scope.nuevoName == undefined) {
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('div#name2').after('<span id="errorNombreGrupo" class="bg-danger text-danger">Debe ingresar un nombre para el grupo</span>');
				}else if ($scope.nuevoName == ''){
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('div#name2').after('<span id="errorNombreGrupo" class="bg-danger text-danger">Debe ingresar un nombre para el grupo</span>');
				}else{
					$('#errorNombreGrupo').detach();
	      	for(var j=0; j< $scope.muchos.length;j++)
					{
						$scope.muchos2.push($scope.muchos[j].nombre);
						console.log($scope.muchos[j].nombre);
					}
					$scope.grupos.push({nombreGrupo :$scope.nuevoName, misEstudiantes:$scope.muchos2});
						console.log($scope.grupos);
					$scope.nuevoName = '';
					$scope.nuevoEstudiante ='';
					$scope.muchos = [];
					$scope.muchos2 = [];
				}
        };
						<!-- //fin funcion agregar nombre de y role de estudiantes a arreglo vacio-->
			
						<!-- //funciones de remover-->
			$scope.removeGrupo=function(grupo){
				var i = $scope.grupos.indexOf(grupo);
				var r = confirm("Desea eliminar esto");
				if (r == true) {
				$scope.grupos.splice(i,1);
				}
			};
			$scope.removeGrupo2=function(grupo){
				var i = $scope.muchos.indexOf(grupo);
				var r = confirm("Desea eliminar esto");
				if (r == true) {
				$scope.muchos.splice(i,1);
				}
			};
			$scope.removeGrupo3=function(grupo){
				var i = $scope.todos.indexOf(grupo);
				var r = confirm("Desea eliminar esto");
				if (r == true) {
				$scope.todos.splice(i,1);
				}
			};
			$scope.removeGrupo4=function(grupo){
				var i = $scope.temps.indexOf(grupo);
				var r = confirm("Desea eliminar esto");
				if (r == true) {
				$scope.temps.splice(i,1);
				}
			};
			$scope.removeGrupo5=function(todosArchivo){
				var i = $scope.todosArchivos.indexOf(todosArchivo);
				console.log(todosArchivo);
				var r = confirm("Desea borra este archivo");
				if (r == true) {
				$scope.todosArchivos.splice(i,1);
				}
			};
			$scope.botonCancelar=function(grupo){
				$('#errorNombreGrupo').detach();
				$('#errorEstudiante').detach();
				$('#errorRoles').detach();
				$scope.nuevoName = '';
				$scope.nuevoEstudiante ='';
				$scope.nuevoRole ='';
				$scope.muchos = [];
				$scope.muchos2 = [];
				$scope.temps =[];
				$scope.temps2 =[];
			};
				<!-- //fin funciones de remover-->
				$scope.cerrarArchivos=function(){
				$scope.archivoParaSubir ='';
				$scope.nuevoNameArhivo = '';
				$scope.enviarArchivo = '';
				$('#errorArchivoName').detach();
				$('#errorArchivoUp').detach();
				$('#errorArchivoGrupo').detach();
			};
			$scope.subirArchivos=function(enviarArchivo){
				var i = $scope.GruposArchivos.indexOf(enviarArchivo);
					if ($scope.nuevoNameArhivo == undefined) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('div#nameArchivo2').after('<span id="errorArchivoName" class="bg-danger text-danger">Debe escribir un nombre para el archivo</span>');
				}else if ($scope.archivoParaSubir == 2) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').after('<span id="errorArchivoUp" class="bg-danger text-danger">Debe selecionar un archivo</span>');
				}else if ($scope.nuevoNameArhivo == '') {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('div#nameArchivo2').after('<span id="errorArchivoName" class="bg-danger text-danger">Debe escribir un nombre para el archivo</span>');
				}else if ($scope.archivoParaSubir == 2) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').after('<span id="errorArchivoUp" class="bg-danger text-danger">Debe selecionar un archivo</span>');
				}else if ($scope.enviarArchivo == undefined) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('select#gruposArchivos').after('<span id="errorArchivoGrupo" class="bg-danger text-danger">Debe seleccionar un grupo</span>');
				}else if ($scope.enviarArchivo == '') {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('select#gruposArchivos').after('<span id="errorArchivoGrupo" class="bg-danger text-danger">Debe seleccionar un grupo</span>');
				}else{
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$scope.GruposArchivos[i].archivos.push($scope.nuevoNameArhivo);
					console.log($scope.GruposArchivos[i]);
					console.log($scope.archivoParaSubir);
					$scope.archivoParaSubir ='';
					$scope.nuevoNameArhivo = '';
					$scope.enviarArchivo = '';
					var inputDeArchivo = $("#nameFile");
					//inputDeArchivo.replaceWith(inputDeArchivo.val('').clone(true));
					inputDeArchivo.replaceWith( inputDeArchivo = inputDeArchivo.val('').clone( true ) );
				}
			};

			$scope.mostrarArchivos=function(GruposArchivo){
				var i = $scope.GruposArchivos.indexOf(GruposArchivo);
				$scope.todosArchivos = $scope.GruposArchivos[i].archivos;
				console.log($scope.todosArchivos);
				
			};
			$scope.mostrarGrupo=function(grupo){
				$scope.todosName =[];
				var i = $scope.grupos.indexOf(grupo);
				$scope.todosName.push($scope.grupos[i].nombreGrupo);
				$scope.todos = $scope.grupos[i].misEstudiantes;
				console.log($scope.todosName);
				
			};
			$scope.mostrarIntegrantes=function(proyecto){
				var i = $scope.proyectos.indexOf(proyecto);
				$scope.myGrupo = $scope.proyectos[i].integrantes;
				console.log($scope.myGrupo);
				console.log($scope.proyectos[i]);
				$scope.todosIntegrantes = $scope.proyectos[i];
				console.log($scope.todosIntegrantes);
				
			};
			$scope.mostrarProyectosVotacion=function(proyecto){
				console.log(proyecto.nuevoEnviado.opcion);
				console.log($scope.enviarProyectos);
				var i = $scope.proyectos.indexOf(proyecto);
				console.log($scope.temProyectos);
				if (proyecto.nuevoEnviado.opcion == 'si') {
					$scope.temProyectos =[];
					$scope.enviarProyectos.push($scope.proyectos[i].proyectoName);
					console.log($scope.enviarProyectos[0]);
				}else if ($scope.enviarProyectos.length <= 0) {
				}else{
					for(var m=0; m< $scope.enviarProyectos.length;m++){
							if ($scope.enviarProyectos[m] != $scope.proyectos[i].proyectoName) {
							console.log($scope.enviarProyectos[m]);
								$scope.temProyectos.push($scope.enviarProyectos[m]);
							}else{
								console.log('hola');
								console.log($scope.temProyectos);
							}
						}
								$scope.enviarProyectos = $scope.temProyectos;
				}
			};

			$scope.addEstudiante2=function(grupo){
				console.log($scope.todos.length);
				$scope.temps.push($scope.nuevoEstudiante2.miName);
				$scope.nuevoEstudiante2 ='';
			};
			$scope.guardar=function(grupo){
				console.log($scope.todos);
				console.log($scope.temps);
				$scope.temps2 = [];
				$scope.temps2.push({nombres:$scope.temps});
				console.log($scope.temps2[0].nombres.length);
				for(var r=0; r< $scope.temps2[0].nombres.length;r++)
					{
						$scope.todos.push($scope.temps2[0].nombres[r]);
					}
				$scope.nuevoEstudiante2 ='';
				$scope.temps =[];
				$scope.temps2 =[];
				console.log($scope.todos);
			};

			
		});
				<!--//fin controller-->

				<!--//rutas-->

		modulo.config(function($stateProvider, $urlRouterProvider) {
    
	    $urlRouterProvider.otherwise('/usuario');
	    
	    $stateProvider
	        
	      	 .state('grupo2.crearGrupo', {
	            url: '/crearGrupo',
	            templateUrl: 'pages/_ingresarGrupo.html',
	            controller : 'gruposController'
	        })
	        .state('grupo2.elegir', {
	            url: '/elegir-proyectos',
	            templateUrl: 'pages/_elegirProyectos.html',
	            controller : 'gruposController'
	        })
	        .state('grupo2.archivosProfesor', {
	            url: '/archivos-proyectos',
	            templateUrl: 'pages/_archivosProfesor.html',
	            controller : 'gruposController'
	        })
	        
	        
	        
        
     	<!--//fin rutas-->
                
});

})();