// Code goes here
angular.module('modifyUser', [])
  .controller('updateUserCtrl', function($scope, $http) {
  $scope.validValues = ['0','1','2','3','4','5','6','7','8','9'];
   var self=this;

    function renderElement(elementIds) {
      angular.forEach(elementIds, function(id) {
        angular.element(id).controller('ngModel').$render();
      });
    }

    self.updateModel = function updateModel() {
         $http.post('php/buscarUsuario.php', {"data" : $scope.searchUser}).
          success(function(data) {
          $scope.data = data;
          console.log(data);

          if(data.length==0 || data[0].inactivo == '1'){  
             $('.errorSearch').css('display','block');
          }
          else{
            $('.errorSearch').css('display','none');
            self.userFormEdit.userName.$setViewValue(data[0].nombre);
            self.userFormEdit.primerApellido.$setViewValue(data[0].primerApellido);
            self.userFormEdit.segundoApellido.$setViewValue(data[0].segundoApellido);
            self.userFormEdit.userDireccion.$setViewValue(data[0].direccion);
            self.userFormEdit.userCed.$setViewValue(data[0].cedula);
            self.userFormEdit.userFecha.$setViewValue(data[0].fechaNacimiento);
            self.userFormEdit.correo.$setViewValue(data[0].correo);
            self.userFormEdit.contrasena.$setViewValue(data[0].contrasena);
            self.userFormEdit.tel.$setViewValue(data[0].telefono);
            self.userFormEdit.profilePhoto.$setViewValue(data[0].Foto);
            self.userFormEdit.roleUsuario.$setViewValue(data[0].userRole);
            self.userFormEdit.usuario_id.$setViewValue(data[0].idUsuario);


            renderElement(['#inpNameUser', '#inpPrimerApellido', '#inpSegApellido', '#inpDireccion', '#inpFecha', '#inpCedula', '#inpCorreo', '#inpPassword', '#inpTelefono','#imgPhoto', '#roleUser', '#inpUserId']);
          }

    })// termina post
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
        //$scope.datos = jQuery.parseJSON(localStorage.getItem('users'));
        console.log($scope.birthDate);
        $http.post('php/modificarUsuario.php', { 'nombre' : $scope.nameUser, 'primerApellido':$scope.primerApellido, 'segundoApellido': $scope.segundoApellido, 'fechaNacimiento': ($('#inpFecha').val()), 'direccion': $scope.direccion, 'tel': $scope.telefono, 'ced': $scope.cedula, 'correo': $scope.correo, 'pass': $scope.contrasena, 'role': $scope.rol, 'id': $scope.usuarioId}).
            success(function(data, status) {
              $scope.status = status;
              $scope.data = data;
              $scope.result = data; 
              console.log($scope.cedula);
            })
        //validar q el form no este vacion
       //if($scope.userFormMain.$valid){
          /*$scope.datos[0].Nombre = $('#inpNameUser').val();
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
          console.log(jQuery.parseJSON(localStorage.getItem('users')));*/
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