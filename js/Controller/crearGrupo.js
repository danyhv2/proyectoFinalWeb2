(function(){
						<!--//crear app-->
	var modulo = angular.module('crearGrupo', []);
						<!--//fin crear app-->

						<!--//inicio controller-->
		modulo.controller('gruposController', function($scope, $http){
			
						<!--//arreglo estudiantes-->
			$scope.estudiantes = [
			{
				name : 'Roy Solera Quiros1'
			},
			{
				name : 'Zatan'
			},
			{
				name : 'Roy Solera Quiros3'
			},
			{
				name : 'Roy Solera Quiros4'
			},
			{
				name : 'Roy Solera Quiros5'
			}
			];
						<!--//fin arreglo estudiantes-->

						<!-- //arreglo vacios-->
			$scope.grupos = [
			];
			$scope.muchos = [];
			$scope.muchos2 = [];
						<!-- //arreglo vacios-->

						<!-- //funcion ordenar tabla de grupos-->
			$scope.ordenar= function(orden){
				$scope.ordenSeleccionado = orden;
			};
						<!-- //fin funcion ordenar tabla de grupos-->

						<!-- //funcion agregar estudiantes a arreglo vacio-->
			$scope.addEstudiante=function(){
				$scope.muchos.push({nombre:$scope.nuevoEstudiante.name, role:$scope.nuevoRole});
				$scope.nuevoEstudiante ='';
				$scope.nuevoRole ='';
				console.log($scope.muchos);
			};
						<!-- //fin funcion agregar estudiantes a arreglo vacio-->

						<!-- //funcion agregar nombre de y role de estudiantes a arreglo vacio-->
			$scope.addGrupo=function(){			
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
            };
						<!-- //fin funcion agregar nombre de y role de estudiantes a arreglo vacio-->
			
						<!-- //funciones de remover-->
			$scope.removeGrupo=function(grupo){
				var i = $scope.grupos.indexOf(grupo);
				$scope.grupos.splice(i,1);
			};
			$scope.removeGrupo3=function(grupo){
				var i = $scope.todos.indexOf(grupo);
				$scope.todos.splice(i,1);
			};
			$scope.removeGrupo2=function(grupo){
				var i = $scope.muchos.indexOf(grupo);
				$scope.muchos.splice(i,1);
			};
				<!-- //fin funciones de remover-->
			$scope.mostrarGrupo=function(grupo){
				var i = $scope.grupos.indexOf(grupo);
				var myGrupo = $scope.grupos[i];
				$scope.todos = $scope.grupos[i].misEstudiantes;
				$scope.formitas=myGrupo;
				console.log($scope.todos);
				
			};
			$scope.addEstudiante2=function(grupo){
				$scope.todos.push($scope.nuevoEstudiante.name);
				$scope.nuevoEstudiante ='';
				console.log($scope.todos);
			
			};

			
		});
				<!--//fin controller-->

				<!--//rutas-->

		modulo.config(function($stateProvider, $urlRouterProvider) {
    
	    $urlRouterProvider.otherwise('/usuario');
	    
	    $stateProvider
	        
	      	 .state('crearGrupo', {
	            url: '/crear-grupo',
	            templateUrl: 'views/_ingresarGrupo.html',
	            controller : 'gruposController'
	        })
	        .state('rubricas', {
	            url: '/rubricas',
	            template: 'Trabajando en ello',
	            controller : 'gruposController'
	        })
	        
	        
        
     	<!--//fin rutas-->
                
});

})();