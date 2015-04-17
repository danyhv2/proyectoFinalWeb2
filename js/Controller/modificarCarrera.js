// Code goes here
angular.module('modifyCarrera', [])
  .controller('updateCarreraCtrl', function($scope, $http) {
   var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    }

    self.buscarCarrera = function(){
      $http.post('php/buscarCarrera.php', { "data" : $scope.getCarrera }).
      success(function(data) {
        $scope.data = data;
        console.log(data);
        console.log(data.length);
          
        if(data.length==0 || data[0].inactivo == '1'){
          $('.errorSearch').css('display','block');
        }else{
          $('.errorSearch').css('display','none');
          self.formEditCarrera.nombre.$setViewValue(data[0].nombre);
          self.formEditCarrera.codCarrera.$setViewValue(data[0].codCarrera);
          self.formEditCarrera.director.$setViewValue(data[0].dirCarrera);
          self.formEditCarrera.idCarrera.$setViewValue(data[0].id_carrera);
          renderElement(['#inpNombreCarrera', '#inpCodCarrera', '#inpDirCarrera', '#inpId']);
        }
        
      })

    };

    $scope.modificar = function() {
      if($scope.updCarrera.formEditCarrera.$valid && $('#chkCurso').not('.md-checked')){
        $http.post('php/modificarCarrera.php', { 'nombre' : $scope.nombreCarrera, 'codigo':$scope.codigo, 'director': $scope.director, 'id': $scope.id_carrera}).
            success(function(data, status) {
              $scope.status = status;
              $scope.data = data;
              $scope.result = data; 
              console.log(data);
              $('#modalEditarCarrera2').modal('hide');
              $('.modal-backdrop').modal('hide');
              $('#modalExitoCarrera2').fadeIn(1000);
              $('#modalExitoCarrera2').fadeOut(3000);
            })
        }
      if($scope.updCarrera.formEditCarrera.$valid && $('#chkCurso').hasClass('md-checked')){
        $('#modalEditarCarrera').modal('hide');
        $('#modalExitoCarrera2').modal('hide');
        $('#modalConfirmCarrera').modal('show');
        
        //cancelar modal confirm, me devuelve al modal principal
        $('.cancelConfirm').click(function() {
          $('#modalEditarCarrera').modal('show');
          $('#modalConfirmCarrera').modal('hide');
        });

        $('.btnConfirmModal').click(function() {
          $http.post('php/modificarCarrera.php', { 'nombre' : $scope.nombreCarrera, 'codigo':$scope.codigo, 'director': $scope.director, 'id': $scope.id_carrera, 'inactivo': '1'}).
            success(function(data, status) {
            
          })
           $('#modalConfirmCarrera').modal('hide');
           $('#modalExitoCarrera2').fadeIn(1000);
           $('#modalExitoCarrera2').fadeOut(1000);
        });
      }

    };

  });

