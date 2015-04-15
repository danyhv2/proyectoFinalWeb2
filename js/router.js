var routerApp = angular.module('routerApp', ['ngMaterial', 'ngMessages', 'ui.bootstrap.demo','ui.router', 'fileUpload', 'module', 'rutas', 'moduleDocs','moduleReport', 'crearGrupo','moduleHome', 'modulePerfil', 'modulePortafolio', 'modifyUser', 'agregarCarrera', 'agregarCurso', 'modifyCarrera', 'modifyCurso', 'verUsuarios', 'moduleVotacion','moduleLogin', 'moduleSocial', 'tindalos']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('configuracion.ingresarUsuario', {
            url: '/ingresar-usuario',
            templateUrl: 'views/_ingresar-usuario.html'
        })
        .state('configuracion.verUsuario', {
            url: '/usuarios',
            templateUrl: 'views/_ver-usuario.html'
        })
        .state('configuracion.modificarUsuario', {
            url: '/modificar-usuario',
            templateUrl: 'views/_modificar-usuario.html'
        })
         .state('configuracion.ingresarCarrera', {
            url: '/ingresar-carrera',
            templateUrl: 'views/_ingresar-carrera.html'
        })
          .state('configuracion.ingresarCurso', {
            url: '/ingresar-curso',
            templateUrl: 'views/_ingresar-curso.html'
        })
          .state('configuracion.ingresarCurso.editar', {
            url: '/editar',
            templateUrl: 'views/_modal-editar-curso.html'
            
        })
          .state('configuracion.ingresarCarrera.editarCarrera', {
            url: '/editar',
            templateUrl: 'views/_modal-editar-carrera.html'
            
        })
        .state('configuracion.votacion',{
			  url:'/votacion',
			  templateUrl:'views/_votacion.html',
			  controller:'VotacionCtrl'
		  })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
});

routerApp.controller('MenuC', function($scope) {
    $('ul.menuConfig li a').click(function () {
    $('ul.menuConfig li.active').removeClass('active')
    $(this).parent('li').addClass('active')
  });
});

var users = [];

routerApp.controller('userCtrl', function($scope, $http){
  $scope.url = 'php/query.php';
  $scope.validValues = ['0','1','2','3','4','5','6','7','8','9'];
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
 
  $scope.validate = function() {
      var userExist = false;
      var validEmail = false;
      var newUsers = jQuery.parseJSON(localStorage.getItem('users'));
            console.log(newUsers);
            if(newUsers !== null){
                for(var i = 0; i < newUsers.length; i++) {
                if(($('#inpEmail').val()) == newUsers[i].Correo){
                  $('.msgErrorUser').css('display','block');
                  $('.msgErrorUser').fadeOut(3000);
                   userExist = true;
                }
              }
            } 
            var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[ucenfotec]+\.[ac]+\.[cr]{2,4}$/);
            function isValidEmailAddress(emailAddress) {
            return pattern.test(emailAddress);

            };
            if($('#inpEmail').val() != '' &&! (pattern.test($('#inpEmail').val()))){
              console.log('invalid');
              $('.msgErrorEmail').css('display','block');
                validEmail = true;
            }else{
              $('.msgErrorEmail').css('display','none');
            }
              
              if($scope.userForm.$valid && userExist != true && validEmail != true){
                $scope.newUser = {
                'Nombre': $scope.userName,
                'PrimerApellido': $scope.firstLastName,
                'SegundoApellido': $scope.secondLastName,
                'Direccion': $scope.address,
                'Cedula': $scope.idUser,
                'Foto': ($('.thumb').attr('ng-src')),
                'FechaNacimiento': ($('#inpFechaNacimiento').val()),
                'Correo': $scope.email,
                'Contrasena': $scope.password,
                'Role': $('.optionsRole').find('span').text()
                };
                //console.log($scope.newUser);
                //$('#msgSuccess').css('display','block');
                $('#modalExitoUsuarios').fadeIn(1000);
                $('#modalExitoUsuarios').fadeOut(4000);
                $('#modalExitoUsuarios').modal('hide');
                //$('#msgSuccess').fadeOut(3000);
                users.push($scope.newUser);
                localStorage.setItem('users', JSON.stringify(users));
                $('.formUser').trigger('reset');
                };

                console.log($scope.userPic);


                  $http.post($scope.url, { 'nombre' : $scope.userName, 'PrimerApellido':$scope.firstLastName, 'SegundoApellido': $scope.secondLastName, 'Direccion':$scope.address, 'Cedula':$scope.idUser, 'Foto':$scope.idUser, 'FechaNacimiento': ($('#inpFechaNacimiento').val()), 'Correo': $scope.email, 'Contrasena': $scope.password, 'img': $scope.userPic}).
                  success(function(data, status) {
                    $scope.status = status;
                    $scope.data = data;
                    $scope.result = data; // Show result from server in our <pre></pre> element
                    console.log(data);
                  })
                  .
                  error(function(data, status) {
                    $scope.data = data || "Request failed";
                    $scope.status = status;     
                  });


                
            }


});
routerApp.directive('validateNumber', function ($parse) {
    return {
        scope: {
          validValues: '=validValues'
        },
        link: function (scope, elm, attrs) {
          elm.bind('keypress', function(e){
            var char = String.fromCharCode(e.which||e.charCode||e.keyCode), matches = [];
            angular.forEach(scope.validValues, function(value, key){
              if(char === value) matches.push(char);
            }, matches);
            if(matches.length == 0){
              console.log('no');
              e.preventDefault();
              return false;
            }
          });
        }
    }   
});
  routerApp.controller('getUserCtrl', function($scope){
        var self=this;
        $scope.query = {};
        $scope.queryBy = '$';
   //obtener usuarios agregados
        $scope.datos = [];
        $scope.datos = jQuery.parseJSON(localStorage.getItem('users'));
          //console.log($scope.datos.length);
    

  });
 