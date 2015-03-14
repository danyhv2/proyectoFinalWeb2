// Code goes here
angular.module('modifyUser', [])
  .controller('updateUserCtrl', function($scope) {
   var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    }

    this.datos = jQuery.parseJSON(localStorage.getItem('users'));

    self.updateModel = function updateModel() {
      for(var i = 0; i < this.datos.length; i++){
        if($('.searchCurso').val() != this.datos[i].Correo){
           $('.errorSearch').css('display','block');
        }
        else{
          $('.errorSearch').css('display','none');
          self.userFormEdit.userName.$setViewValue(this.datos[i].Nombre);
          self.userFormEdit.primerApellido.$setViewValue(this.datos[i].PrimerApellido);
          self.userFormEdit.segundoApellido.$setViewValue(this.datos[i].SegundoApellido);
          self.userFormEdit.userDireccion.$setViewValue(this.datos[i].Direccion);
          self.userFormEdit.userCed.$setViewValue(this.datos[i].Cedula);
          self.userFormEdit.userFecha.$setViewValue(this.datos[i].FechaNacimiento);
          self.userFormEdit.correo.$setViewValue(this.datos[i].Correo);
          self.userFormEdit.contrasena.$setViewValue(this.datos[i].Contrasena);
          self.userFormEdit.profilePhoto.$setViewValue(this.datos[i].Foto);

          renderElement(['#inpNameUser', '#inpPrimerApellido', '#inpSegApellido', '#inpDireccion', '#inpFecha', '#inpCedula', '#inpCorreo', '#inpPassword', '#imgPhoto']);
        }

    }
    };

    $scope.roles = [
    {
      nombre: 'Estudiante'
    },
    { 
      nombre: 'Administrador'
    },
    { 
      nombre: 'Profesor'
    },
    { 
      nombre: 'Director de Carrera'
    },
    { 
      nombre: 'Decano'
    }
  ];


      $scope.disable=true;
      $scope.disable2=true;
      $scope.editarUsuario = function(){
            $scope.disable=false;
            $('.saveUser').css('display','block');
            $('.cancelUser').css('display','block');
      }
      $scope.guardarUsuario = function(){
        $scope.datos = jQuery.parseJSON(localStorage.getItem('users'));
        console.log($scope.datos[0].Nombre);
        //validar q el form no este vacion
       //if($scope.userFormMain.$valid){
          $scope.datos[0].Nombre = $('#inpNameUser').val();
          $scope.changedUser = [{
                            'Nombre': $('#inpNameUser').val(),
                            'PrimerApellido':  $('#inpPrimerApellido').val(),
                            'SegundoApellido':  $('#inpSegApellido').val(),
                            'Direccion':  $('#inpDireccion').val(),
                            'Cedula':  $('#inpCedula').val(),
                            'Foto':  $scope.datos[0].Foto,
                            'FechaNacimiento': $('#inpFecha').val(),
                            'Correo':  $('#inpCorreo').val(),
                            'Contrasena': $('#inpPassword').val(),
                              }];               
                           
          localStorage.setItem('users',JSON.stringify($scope.changedUser));
          console.log(jQuery.parseJSON(localStorage.getItem('users')));
          $scope.disable=true;
          $('#msgSuccess').css('display','block');
          $('#msgSuccess').fadeOut(3000);
          $('.saveUser').css('display','none');
          $('.cancelUser').css('display','none');
      //}

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