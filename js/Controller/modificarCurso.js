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
      for(var i = 0; i < this.datos.length; i++){
        if($('.searchCurso').val() != this.datos[i].Curso){
          $('.errorSearch').css('display','block');
        }else{
          // update the form values
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


      $scope.disable=true;
      $scope.disable2=true;
      $scope.editarUsuario = function(){
            $scope.disable=false;
            $('.saveUser').css('display','block');
            $('.cancelUser').css('display','block');
      }
      $scope.guardarUsuario = function(){
        console.log($scope.datos[0].Nombre);
        $scope.datos[0].Nombre = $('#inpNameUser').val();
        $scope.changedUser = [{
                          'Nombre':  $scope.datos[0].Nombre,
                          'PrimerApellido':  $scope.datos[0].PrimerApellido,
                          'SegundoApellido':  $scope.datos[0].SegundoApellido,
                          'Direccion':  $scope.datos[0].Direccion,
                          'Cedula':  $scope.datos[0].Cedula,
                          'Foto':  $scope.datos[0].Foto,
                          'FechaNacimiento':  $scope.datos[0].FechaNacimiento,
                          'Correo':  $scope.datos[0].Correo,
                          'Contrasena': $scope.datos[0].Contrasena
                            }];
                         
        localStorage.setItem('users',JSON.stringify($scope.changedUser));
        console.log(jQuery.parseJSON(localStorage.getItem('users')));

      }
      $scope.editarUsuarioAcceso = function(){
            $scope.disable2=false;
            $('.saveUserAccess').css('display','block');
            $('.cancelUserAccess').css('display','block');
            $('.inpNewPass').css('display','block');
            $('.inpNewPassConfirm').css('display','block');
      }
      $scope.cancelEditarUsuario = function(){
             $scope.disable=true;
             $('.saveUser').css('display','none');
             $('.cancelUser').css('display','none');
      }
      $scope.cancelUsuarioAcceso = function(){
            $scope.disable2=true;
            $('.saveUserAccess').css('display','none');
            $('.cancelUserAccess').css('display','none');
            $('.inpNewPass').css('display','none');
            $('.inpNewPassConfirm').css('display','none');
      }
      $scope.validarContrasena = function(){
            if(($('.inpNew').val()) !== ($('.inpConfirm').val())){
                $('.msgError').css('display', 'block');
            }
      }
      $scope.saveNewInfo = function (){

      }

  });