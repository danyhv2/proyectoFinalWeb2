var perfilModule = angular.module('modulePerfil', ['ngFileUpload']);


perfilModule.controller('userPerfilCtrl', function($scope, $http, $upload) {
	var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    } 
//var userlogin = localStorage.getItem('user');

	$http.post('php/obtenerPerfil.php', { 'data': 'estudiante@ucenfotec.ac.cr'}).
            success(function(data, status) {
            	$scope.data=data;
            	console.log(data);
            	console.log(data[0].descripcion);
            	
            		if(self.editPerfil){
	            	 self.editPerfil.descripcion.$setViewValue(data[0].descripcion);
			         self.editPerfil.changedPhone.$setViewValue(data[0].telefono);
			         self.editPerfil.direccionExacta.$setViewValue(data[0].direccion);
			         renderElement(['#inpDescripcion', '#inpTelefono', '#inpDireccion']);
			         console.log($scope.tel);
			 
			     }

			     /*$scope.upload = function (files) {
			        if (files && files.length) {
			            for (var i = 0; i < files.length; i++) {
			                var file = files[i];
			                $upload.upload({
			                    url: 'php/subirFoto.php',
			                    method:'POST',
			                    //fields: {'username': $scope.username},
			                    file: file,
			                    fileName: (data[0].cedula)+'.jpg'
			                }).progress(function (evt) {
			                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
			                }).success(function (data, status, headers, config) {
			                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
			                });
			            }
			        }	
			    };*/




			    /* $scope.upload = $upload.upload({
            url: 'php/subirFoto.php',
            method: 'POST',               
            file: file
        }).success(function(data, status, headers, config) {
            $scope.message = data;  
            console.log(data);              
        }).error(function(data, status) {
            $scope.message = data;
        });*/
		
         
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
			            $('#modalExitoPerfil').fadeIn(1000);
			            $('#modalExitoPerfil').fadeOut(4000);

	            	}
	            	
	            }
          })
	});
