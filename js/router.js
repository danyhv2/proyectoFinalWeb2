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
        
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                
});

routerApp.controller('AppCtrl', function($scope) {
  $scope.project = [
  {
    description: '',
    rate: 500
  },
  {
    role:'estudiante',
    descripcion:''
  },
  {
    role:'administrador',
    descripcion:''
  }
  ]
  $scope.toppings = [
    { category: 'meat', name: 'Pepperoni' },
    { category: 'meat', name: 'Sausage' },
    { category: 'meat', name: 'Ground Beef' },
    { category: 'meat', name: 'Bacon' },
    { category: 'veg', name: 'Mushrooms' },
    { category: 'veg', name: 'Onion' },
    { category: 'veg', name: 'Green Pepper' },
    { category: 'veg', name: 'Green Olives' },
  ];
});
var users = [];

routerApp.controller('userCtrl', function($scope){
  $scope.errors = [
    {
      errNombre: 'El nombre es un campo requerido.'
    },
    {
      errPrimerApellido: 'El primer apellido es un campo requerido.'
    },
    {
      errSegundoApellido: 'El segundo apellido es un campo requerido.'
    }
  ];
  
  $scope.validate = function() {
    //var imgProfile= $('.thumb');
    //imgProfile.css({'width':'70px','height':'70px'});
    //console.log(imgProfile);
       if($scope.userForm.$valid ==true){
          $scope.newUser = {
            'Nombre': $scope.userName,
            'PrimerApellido': $scope.firstLastName,
            'SegundoApellido': $scope.secondLastName,
            'Direccion': $scope.address,
            'Cedula': $scope.idUser,
            'Foto': ($('.thumb').attr('ng-src')),
            'FechaNacimiento': $scope.birthDate,
            'Correo': $scope.email,
            'Contrasena': $scope.password
        };
        $('#msgSuccess').css('display','block');
        users.push($scope.newUser);
        localStorage.setItem('users', JSON.stringify(users));
        };
      }
   

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
        function renderElement(elementIds) {
            angular.forEach(elementIds, function(input) {
              angular.element(input).controller('ngModel').$render();
            });
          }

          self.updateModel = function updateModel() {
          for(var i = 0; i < $scope.datos.length; i++) {
              if($('#searchCurso').val() == ($scope.datos[i].Correo)){
                //$('#inpUser').data('ng-model',$scope.datos[i].Nombre);
                 // update the form values
                self.datos[0].PrimerApellido.$setViewValue($scope.datos[i].Nombre);
                // now call $render() to update the model associated to each input
                renderElement(['#inpPrimerApellido']);
               console.log($scope.datos[i].Nombre);
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
 

  routerApp.controller('editUserCtrl', function($scope){
    //$scope.editarUsuario=true;

  });
