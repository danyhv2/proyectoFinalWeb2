var perfilModule = angular.module('modulePerfil', []);


perfilModule.controller('userPerfilCtrl', function($scope, $http) {
	var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    } 


	$http.post('php/obtenerPerfil.php', { 'data': 'test@gmail.com'}).
            success(function(data, status) {
            	$scope.data=data;
            	console.log(data);
            	
            		if(self.editPerfil){
	            	 self.editPerfil.descripcion.$setViewValue(data[0].descripcion);
			         self.editPerfil.changedPhone.$setViewValue(data[0].telefono);
			         self.editPerfil.direccionExacta.$setViewValue(data[0].direccion);
			         renderElement(['#inpDescripcion', '#inpTelefono', '#inpDireccion']);
			         console.log($scope.tel);
			     }
            	
         
            	$scope.actualizarPerfil = function(){
	            	if($scope.perfil.editPerfil.$valid){
	            		$http.post('php/modificarPerfil.php', { 'descripcion': $scope.perfilDescripcion, 'tel': $scope.perfilTelefono, 'direccion': $scope.perfilDireccion}).
			            success(function(data, status) {
			            	$scope.data=data
			            	console.log(data);
			            	$('#desc').text($scope.perfilDescripcion);
			            	$('#telPerfil').text($scope.perfilTelefono);
			            	$('#dirPerfil').text($scope.perfilDireccion);
			            	})
			            $('#modificarPerfil').modal('hide');

	            	}
	            	
	            }
          })
	});
