var app = angular.module('moduleLogin',['ngResource','ngRoute']);

app.controller('signupController',function($scope, $location, $http, $rootScope) {
        
    $scope.submitted = false;
    $scope.patternEmail =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    $scope.signupForm = function() {
        
        if ($scope.userForm.$valid) {
            var posicion = -1;
            var email = $scope.usuario.email;
            var password = $scope.usuario.password;

            $http.get('data/usuario.json').success(function(data) {
                    
            for (var i = 0; i < data.length; i++) {
                        
                if (data[i].email == email) {
                            
                    if ( data[i].password == password) {
                        posicion = i;
                        $('#login').modal('hide');
                        $('#formLogin').trigger("reset");
                        break
                    }
                }
                if (data[i].email != email) {
                    $("#nuevo-user").removeClass('hide');
                    $("#nuevo-user").addClass('show');
        
                    timeoutHandle = window.setTimeout(function(){
                        $("#nuevo-user").removeClass('show');
                        $("#nuevo-user").addClass('hide');
                    }, 2000);

                }
            }

                if (posicion > -1) {
                    $rootScope.usuarioLogueado = {
                        "nombre": data[posicion].nombre,
                        "password": data[posicion].password,
                        "email": data[posicion].email,
                        "foto": data[posicion].foto,
                        "Rol": data[posicion].rol
                    };
                        
                    var Userlogin = JSON.stringify($rootScope.usuarioLogueado);
                                    console.log(Userlogin)
                                
                    if ($rootScope.usuarioLogueado.Rol == "administrador") {
                        $('#link-abrir').addClass('hide'); 
                        $('#link-cerrar').removeClass('hide'); 
                        $('#img-configuracion').removeClass('hide');
                        $('#img-configuracion').addClass('show');
                        $('#home').removeClass('hide');
                        $('#home').addClass('show');
                        $('#documentos').removeClass('hide');
                        $('#documentos').addClass('show');
                        $('#perfil').removeClass('hide');
                        $('#perfil').addClass('show');
                        $('#grupo').removeClass('hide');
                        $('#grupo').addClass('show');
                        $('#reportes-menu').removeClass('hide');
                        $('#reportes-menu').addClass('show');
                        $('#grupo2').removeClass('hide');
                        $('#grupo2').addClass('show');
                        $('#estudiante').removeClass('hide');
                        $('#estudiante').addClass('show');

                        /*$location.url('/configuracion');*/
                    } 
                    if ($rootScope.usuarioLogueado.Rol == "estudiante") {

                        $('#link-abrir').addClass('hide'); 
                        $('#link-cerrar').removeClass('hide'); 
                        $('#documentos').removeClass('hide');
                        $('#documentos').addClass('show');
                        $('#perfil').removeClass('hide');
                        $('#perfil').addClass('show');
                         $('#estudiante').removeClass('hide');
                        $('#estudiante').addClass('show');

                        /*$location.url('/perfil');*/
                    }
                    if ($rootScope.usuarioLogueado.Rol == "profesor") {

                        $('#link-abrir').addClass('hide'); 
                        $('#link-cerrar').removeClass('hide'); 
                        $('#documentos').removeClass('hide');
                        $('#documentos').addClass('show');
                        $('#perfil').removeClass('hide');
                        $('#perfil').addClass('show');
                        $('#reportes-menu').removeClass('hide');
                        $('#reportes-menu').addClass('show');
                        $('#grupo2').removeClass('hide');
                        $('#grupo2').addClass('show');
                                    
                       /* $location.url('/reportes');*/
                    }
                    if ($rootScope.usuarioLogueado.Rol == "director") {
                        $('#link-abrir').addClass('hide'); 
                        $('#link-cerrar').removeClass('hide'); 
                        $('#documentos').removeClass('hide');
                        $('#documentos').addClass('show');
                        $('#perfil').removeClass('hide');
                        $('#perfil').addClass('show');
                        $('#grupo').removeClass('hide');
                        $('#grupo').addClass('show');
                                    
                       /* $location.url('/grupo');*/
                    }
                } 
            });
        }
    }
});

function salir(){
    $("#menu-principal").removeClass('show');
    $("#menu-principal").addClass('hide');
    $('#img-configuracion').removeClass('show');
    $('#img-configuracion').addClass('hide');
    $('#link-abrir').removeClass('hide'); 
    $('#link-cerrar').removeClass('show');
    $('#link-cerrar').addClass('hide'); 
}