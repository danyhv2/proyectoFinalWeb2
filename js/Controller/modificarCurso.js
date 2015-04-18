// Code goes here
angular.module('modifyCurso', [])
  .controller('updateCursoCtrl', function($scope, $http) {
   var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    }

    self.buscarCurso = function(){
      $http.post('php/buscarCurso.php', { "data" : $scope.getCurso }).
      success(function(data) {
        $scope.data = data;
        console.log(data);
        console.log(data.length);
          
        if(data.length==0 || data[0].inactivo == '1'){
          $('.errorSearch').css('display','block');
        }else{
          $('.errorSearch').css('display','none');
          self.userFormEditCurso.nombreCurso.$setViewValue(data[0].nombre);
          self.userFormEditCurso.cuatrimestre.$setViewValue(data[0].cuatrimestre);
          self.userFormEditCurso.anoLectivo.$setViewValue(data[0].annoLectivo);
          self.userFormEditCurso.horario.$setViewValue(data[0].horario);
          self.userFormEditCurso.creditosCurso.$setViewValue(data[0].creditos);
          self.userFormEditCurso.codCurso.$setViewValue(data[0].cod_curso);
          self.userFormEditCurso.idCurso.$setViewValue(data[0].id_curso);
          renderElement(['#inpNombreCurso', '#inpCuatrimestre', '#inpAno', '#inpHorarioCurso', '#inpCreditoCurso', '#inpCodCurso', '#inpId']);
          console.log($('#inpHorarioCurso'));
        }
        
      })

    };

     $scope.modificarCurso = function() {
      if($scope.updCurso.userFormEditCurso.$valid && $('#chkCurso').not('.md-checked')){
        $http.post('php/modificarCurso.php', { 'nombre' : $scope.nombreCurso, 'cuatrimestre':$scope.cuatriCurso, 'anoLectivo': $scope.anoCurso, 'horario': $scope.horarioCurso, 'creditos': $scope.creditosCurso, 'codigo': $scope.codCurso, 'id': $scope.id_curso}).
            success(function(data, status) {
              $scope.status = status;
              $scope.data = data;
              $scope.result = data; 
              console.log(data);
              $('#modalEditarCurso2').modal('hide');
              $('.modal-backdrop').modal('hide');
              $('#modalExitoCurso2').fadeIn(1000);
              $('#modalExitoCurso2').fadeOut(3000);
            })
        }
      if($scope.updCurso.userFormEditCurso.$valid && $('#chkCurso').hasClass('md-checked')){
        $('#modalEditarCurso2').modal('hide');
        $('#modalExitoCurso2').modal('hide');
        $('#modalConfirmCurso').modal('show');
        
        //cancelar modal confirm, me devuelve al modal principal
        $('.cancelConfirm').click(function() {
          $('#modalEditarCurso2').modal('show');
          $('#modalConfirmCurso').modal('hide');
        });

        $('.btnConfirmModal').click(function() {
          $http.post('php/modificarCurso.php', { 'nombre' : $scope.nombreCurso, 'cuatrimestre':$scope.cuatriCurso, 'anoLectivo': $scope.anoCurso, 'horario': $scope.horarioCurso, 'creditos': $scope.creditosCurso, 'codigo': $scope.codCurso, 'id': $scope.id_curso, 'inactivo': '1'}).
            success(function(data, status) {
            
          })
           $('#modalConfirmCurso').modal('hide');
           $('#modalExitoCurso2').fadeIn(1000);
           $('#modalExitoCurso2').fadeOut(1000);
        });
      }

    };

     /* $scope.guardarCurso = function(){
        $scope.datosCurso = jQuery.parseJSON(localStorage.getItem('cursos'));
          if($scope.updCurso.userFormEditCurso.$valid){
        
            $scope.changedCurso = [{
                          'Curso': $('#inpNombreCurso').val(),
                          'Cuatrimestre': $('#inpCuatrimestre').val(),
                          'AnoLectivo': $('#inpAno').val(),
                          'Horario': $('#inpHorarioCurso').val(),
                          'Creditos': $('#inpCreditoCurso').val(),
                          'Codigo':  $('#inpCodCurso').val()
                            }];
                         
            localStorage.setItem('cursos',JSON.stringify($scope.changedCurso));
            $('#modalEditarCurso').modal('hide');
            $('.modal-backdrop').modal('hide');
            $('#modalExito').fadeIn(1000);
            $('#modalExito').fadeOut(3000);
        } 
        if($scope.updCurso.userFormEditCurso.$valid && $('#chkCurso').hasClass('md-checked')){
          $('#modalEditarCurso').modal('hide');
          $('#modalExito').modal('hide');
          $('#modalConfirm').modal('show');
        }
      }*/
    
    

  });


