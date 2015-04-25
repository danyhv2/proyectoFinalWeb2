var routerApp = angular.module('routerApp', ['ngMaterial', 'ngMessages', 'ui.bootstrap.demo','ui.router', 'fileUpload', 'module', 'rutas', 'moduleDocs','moduleReport', 'crearGrupo','moduleHome', 'modulePerfil', 'modulePortafolio', 'modifyUser', 'agregarCarrera', 'agregarCurso', 'modifyCarrera', 'modifyCurso', 'verUsuarios', 'moduleVotacion','moduleLogin', 'moduleSocial', 'tindalos', 'angular-md5']);

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
		  });

        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
});

routerApp.controller('MenuC', function($scope, $state) {
  $state.go('configuracion.ingresarUsuario');
    $('ul.menuConfig li a').click(function () {
    $('ul.menuConfig li.active').removeClass('active')
    $(this).parent('li').addClass('active')
  });
  /*  $('#btnPhoto').click(function (e) {
    // custom handling here
   // e.preventDefault();
      //e.stopPropagation();
      $scope.userForm.$submitted == false;
    console.log('test');
});*/
});

routerApp.controller('MenuDirector', function($scope, $state) {
  $state.go('grupo.grupoCursos');
    $('ul.DirectorMenu li a').click(function () {
    $('ul.DirectorMenu li.active').removeClass('active')
    $(this).parent('li').addClass('active')
  });
});

var users = [];

routerApp.controller('userCtrl', function($scope, $http, $state, $upload, md5){
  $scope.url = 'php/query.php';
  $scope.validValues = ['0','1','2','3','4','5','6','7','8','9'];

  $scope.preventclick = function (){
    $scope.userForm.$submitted == false;
  }
  $scope.validate = function() {
      var userExist = false;
      var idExist = false;
      var validEmail = false;
      //obtener usuarios

        $http.post('php/obtenerUsuarios.php').
        success(function(data2) {
          $scope.data = data2;
          console.log(data2[1].nombre);
          
            if(data2 !== null){
              //verificar si el correo existe
                for(var i = 0; i < data2.length; i++) {
                if(($('#inpEmail').val()) == data2[i].correo){
                  $('.msgErrorUser').css('display','block');
                  $('.msgErrorUser').fadeOut(4000);
                   userExist = true;
                   
                }
              }
              //verificar si la cedula existe
              for(var i = 0; i < data2.length; i++) {
                if($scope.idUser == data2[i].cedula){
                  $('.msgErrorId').css('display','block');
                  $('.msgErrorId').fadeOut(4000);
                   idExist = true;
                   
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
    
              if($scope.userForm.$valid && userExist != true && validEmail != true && idExist != true){
               
                $http.post($scope.url, { 'nombre' : $scope.userName, 'PrimerApellido':$scope.firstLastName, 'SegundoApellido': $scope.secondLastName, 'Direccion':$scope.address, 'Cedula':$scope.idUser, 'Foto':$scope.idUser, 'FechaNacimiento': ($('#inpFechaNacimiento').val()), 'Correo': $scope.email, 'Contrasena': md5.createHash($scope.password), 'img': $scope.userPic, 'role': ($('.optionsRole').find('span').first().text())}).
                  success(function(data, status) {
                    $scope.status = status;
                    $scope.data = data;
                    $scope.result = data; 
                    console.log(data);
                    console.log($scope.roleUser1);
                  })
                  .
                  error(function(data, status) {
                    $scope.data = data || "Request failed";
                    $scope.status = status;     
                  });

                $('#modalExitoUsuarios').fadeIn(1000);
                $('#modalExitoUsuarios').fadeOut(4000);
                $('#modalExitoUsuarios').modal('hide');
                //$('#msgSuccess').fadeOut(3000);
                //users.push($scope.newUser);
  
                $('.formUser').trigger('reset');
                };

                console.log($scope.userPic);

                })//fin del primer post
                
            }


});

routerApp.controller('getRoles', function($scope, $http){
  $http.post('php/getRoles.php').
  success(function(data, status) {
    $scope.status = status;
    $scope.data = data;
    $scope.result = data; // Show result from server in our <pre></pre> element
  })
  .
  error(function(data, status) {
    $scope.data = data || "Request failed";
    $scope.status = status;     
  });
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
//directiva para cambiar la imagen
 routerApp.directive('errSrc', function() {
    return {
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
        
        attrs.$observe('ngSrc', function(value) {
          if (!value && attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
      }
    }
  });


 