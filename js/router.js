var routerApp = angular.module('routerApp', ['ngMaterial', 'ngMessages', 'ui.bootstrap.demo','ui.router', 'fileUpload', 'module', 'rutas', 'moduleDocs','moduleReport', 'crearGrupo','moduleHome', 'moduleProyectos', 'modulePerfil', 'modulePortafolio', 'modifyUser', 'agregarCarrera', 'agregarCurso']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('configuracion.ingresarUsuario', {
            url: '/ingresar-usuario',
            templateUrl: 'views/_ingresar-usuario.html'
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
        
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                
});

routerApp.controller('AppCtrl', function($scope) {
  
});
var users = [];

routerApp.controller('userCtrl', function($scope){

  $scope.validate = function() {
    //var imgProfile= $('.thumb');
    //imgProfile.css({'width':'70px','height':'70px'});
    //console.log(imgProfile);
      var userExist = false;
      var newUsers = jQuery.parseJSON(localStorage.getItem('users'));
            console.log(newUsers);
            if(newUsers !== null){
                for(var i = 0; i < newUsers.length; i++) {
                if(($('#inpEmail').val()) == newUsers[i].Correo){
                  $('.msgErrorUser').css('display','block');
                   userExist = true;
                }
              }
            } var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[ucenfotec]+\.[ac]+\.[cr]{2,4}$/);
            function isValidEmailAddress(emailAddress) {
           
            // alert( pattern.test(emailAddress) );
            return pattern.test(emailAddress);

            };
            if($('#inpEmail').val() != '' &&! (pattern.test($('#inpEmail').val()))){
              console.log('invalid');
              $('.msgErrorEmail').css('display','block');
            }
              
              if($scope.userForm.$valid && userExist != true){
                $scope.newUser = {
                'Nombre': $scope.userName,
                'PrimerApellido': $scope.firstLastName,
                'SegundoApellido': $scope.secondLastName,
                'Direccion': $scope.address,
                'Cedula': $scope.idUser,
                'Foto': ($('.thumb').attr('ng-src')),
                'FechaNacimiento': ($('#inpFechaNacimiento').val()),
                'Correo': $scope.email,
                'Contrasena': $scope.password
                };
                console.log($scope.newUser);
        $('#msgSuccess').css('display','block');
        users.push($scope.newUser);
        localStorage.setItem('users', JSON.stringify(users));
        };
            }

        //obtener usuarios agregados
       

   

});
  routerApp.controller('getUserCtrl', function($scope){
        var self=this;
        $scope.query = {};
        $scope.queryBy = '$';
   //obtener usuarios agregados
        $scope.datos = [];
          $scope.datos = jQuery.parseJSON(localStorage.getItem('users'));
          console.log($scope.datos.length);

         /* $scope.cargarUsuario = function(){
            for(var i = 0; i < $scope.datos.length; i++) {
              if($('#searchCurso').val() == ($scope.datos[i].Correo)){
                $('#inpUser').data('ng-model',$scope.datos[i].Nombre);
               console.log($scope.datos[i].Nombre);
             }
          }
        }*/
    

  });
 

  routerApp.controller('editUserCtrl', function($scope){
    //$scope.editarUsuario=true;

  });
