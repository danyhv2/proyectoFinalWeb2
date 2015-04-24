// Code goes here
angular.module('modifyUser', [])
  .controller('updateUserCtrl', function($scope, $http, md5) {
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

          $scope.editarUsuarioAcceso = function(){
            $scope.disable2=false;
            $('.saveUserAccess').css('display','block');
            $('.cancelUserAccess').css('display','block');
            $('#inpPassword').val('');
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
            $('#inpPassword').val(data[0].contrasena);
            $('.saveUserAccess').css('display','none');
            $('.cancelUserAccess').css('display','none');
            $('.inpNewPass').css('display','none');
            $('.inpNewPassConfirm').css('display','none');
          }
           $scope.validarContrasena = function(){
            if(data[0].contrasena !== md5.createHash(($('#inpPassword').val()))){
              $('.errPass2').css('display', 'block');
            }else{
              $('.errPass2').css('display', 'none');
            }
            if(($('.inpNew').val()) !== ($('.inpConfirm').val())){
                $('.errPass').css('display', 'block');
            }else{
                $('.errPass').css('display', 'none');
            }
            if((data[0].contrasena == md5.createHash(($('#inpPassword').val()))) && ($('.inpNew').val() == $('.inpConfirm').val())){
              $http.post('php/modificarUsuario.php', { 'nombre' : $scope.nameUser, 'primerApellido':$scope.primerApellido, 'segundoApellido': $scope.segundoApellido, 'fechaNacimiento': ($('#inpFecha').val()), 'direccion': $scope.direccion, 'tel': $scope.telefono, 'ced': $scope.cedula, 'correo': $scope.correo, 'pass': md5.createHash($scope.contrasena2), 'role': $scope.rol, 'id': $scope.usuarioId}).
                success(function(dataPass) {
                $scope.data = dataPass;
                console.log(dataPass)
              })
              $('#modalExitoUser').fadeIn(1000);
              $('#modalExitoUser').fadeOut(4000);
              $('#saveUserAccess').css('display','none');
              $('#cancelUserAccess').css('display','none');
            }
          }

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
            self.userFormEdit.profilePhoto.$setViewValue(data[0].cedula);
            self.userFormEdit.roleUsuario.$setViewValue(data[0].userRole);
            self.userFormEdit.usuario_id.$setViewValue(data[0].idUsuario);


            renderElement(['#inpNameUser', '#inpPrimerApellido', '#inpSegApellido', '#inpDireccion', '#inpFecha', '#inpCedula', '#inpCorreo', '#inpPassword', '#inpTelefono','#imgPhoto', '#roleUser', '#inpUserId']);
          }

    })// termina primer post
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
       $scope.currentPass = $scope.contrasena;
      $scope.editarUsuario = function(){
         console.log($scope.currentPass);
            $scope.disable=false;
            $('.saveUser').css('display','block');
            $('.cancelUser').css('display','block');
      }
      $scope.guardarUsuario = function(){
        if($('#chkCurso').not('.md-checked')){
          $http.post('php/modificarUsuario.php', { 'nombre' : $scope.nameUser, 'primerApellido':$scope.primerApellido, 'segundoApellido': $scope.segundoApellido, 'fechaNacimiento': ($('#inpFecha').val()), 'direccion': $scope.direccion, 'tel': $scope.telefono, 'ced': $scope.cedula, 'correo': $scope.correo, 'pass': $scope.contrasena, 'role': $scope.rol, 'id': $scope.usuarioId, 'inactive': 0}).
            success(function(data, status) {
              $scope.data = data;
            })
            $scope.disable=true;
            $('#modalExitoUser2').fadeIn(1000);
            $('#modalExitoUser2').fadeOut(4000);
            $('.saveUser').css('display','none');
            $('.cancelUser').css('display','none');
          }
        if($('#chkCurso').hasClass('md-checked')){
            $('#modalConfirmUsuario').modal('show');
           
          //cancelar modal confirm, me devuelve al modal principal
          $('.cancelConfirmUser').click(function() {
            $('#modalConfirmUsuario').modal('hide');
           
          });

          $('.btnConfirmUser').click(function() {
            $http.post('php/modificarUsuario.php', { 'nombre' : $scope.nameUser, 'primerApellido':$scope.primerApellido, 'segundoApellido': $scope.segundoApellido, 'fechaNacimiento': ($('#inpFecha').val()), 'direccion': $scope.direccion, 'tel': $scope.telefono, 'ced': $scope.cedula, 'correo': $scope.correo, 'pass': $scope.contrasena, 'role': $scope.rol, 'id': $scope.usuarioId, 'inactive': 1}).
            success(function(data, status) {
              $scope.data = data;
            })
            $scope.disable=true;
            $('#modalExitoUser2').fadeIn(1000);
            $('#modalExitoUser2').fadeOut(4000);
            $('.saveUser').css('display','none');
            $('.cancelUser').css('display','none');
          });

          }   

      }

  });