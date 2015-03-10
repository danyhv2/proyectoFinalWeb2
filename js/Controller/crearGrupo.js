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
			console.log($scope.proyectos);

						<!--//fin arreglo estudiantes-->

						<!-- //arreglo vacios-->
			$scope.grupos = [
			];
			$scope.muchos = [];
			$scope.muchos2 = [];
			$scope.temps =[];
			$scope.enviarProyectos =["...."];
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
				$scope.grupos.splice(i,1);
			};
			$scope.removeGrupo2=function(grupo){
				var i = $scope.muchos.indexOf(grupo);
				$scope.muchos.splice(i,1);
			};
			$scope.removeGrupo3=function(grupo){
				var i = $scope.todos.indexOf(grupo);
				$scope.todos.splice(i,1);
			};
			$scope.removeGrupo4=function(grupo){
				var i = $scope.temps.indexOf(grupo);
				$scope.temps.splice(i,1);
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
				var i = $scope.proyectos.indexOf(proyecto);
					for(var m=0; m< $scope.enviarProyectos.length;m++){
							console.log($scope.enviarProyectos[m]);
							if ($scope.enviarProyectos[m] != $scope.proyectos[i].proyectoName) {
								//$scope.enviarProyectos.push($scope.proyectos[i].proyectoName);
								console.log($scope.enviarProyectos+'hola');
							}else{
								$scope.enviarProyectos.splice($scope.enviarProyectos[m]);
								//console.log($scope.enviarProyectos[m]);
							};
						};
						$scope.enviarProyectos.push($scope.proyectos[i].proyectoName);
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
	        
	        
        
     	<!--//fin rutas-->
                
});

})();