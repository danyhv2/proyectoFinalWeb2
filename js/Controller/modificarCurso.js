// Code goes here
angular.module('modifyCurso', [])
  .controller('updateCursoCtrl', function($scope) {
   var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    }

    this.datos = jQuery.parseJSON(localStorage.getItem('cursos'));

    self.updateModel = function updateModel() {
      console.log(this.datos);
      for(var i = 0; i < this.datos.length; i++){
        if($('.searchCurso').val() != (this.datos[i].Curso)){
          $('.errorSearch').css('display','block');
        }else{
          // update the form values
          $('.errorSearch').css('display','none');
          self.userFormEditCurso.nombreCurso.$setViewValue(this.datos[i].Curso);
          self.userFormEditCurso.cuatrimestre.$setViewValue(this.datos[i].Cuatrimestre);
          self.userFormEditCurso.anoLectivo.$setViewValue(this.datos[i].AnoLectivo);
          self.userFormEditCurso.horarioCurso.$setViewValue(this.datos[i].Horario);
          self.userFormEditCurso.creditosCurso.$setViewValue(this.datos[i].Creditos);
          self.userFormEditCurso.codCurso.$setViewValue(this.datos[i].Codigo);
        
          renderElement(['#inpNombreCurso', '#inpCuatrimestre', '#inpAno', '#inpHorarioCurso', '#inpCreditoCurso', '#inpCodCurso']);

        }
    }
    };

      $scope.guardarCurso = function(){
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
      }
      //cancelar modal confirm, me devuelve al modal principal
      $('.cancelConfirm').click(function() {
         $('#modalEditarCurso').modal('show');
         $('#modalConfirm').modal('hide');
      });

      $('.btnConfirmModal').click(function() {
         $('#modalConfirm').modal('hide');
         $('#modalExito').fadeIn(1000);
         $('#modalExito').fadeOut(3000);
      });
    

  });