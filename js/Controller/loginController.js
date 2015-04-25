var app = angular.module('moduleLogin',['ngResource','ngRoute']);

app.controller('signupController',function($scope, $location, $http, $rootScope) {
        
    $scope.submitted = false;
    $scope.patternEmail =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    $scope.signupForm = function() {
        
        if ($scope.userForm.$valid) {
            var posicion = -1;

            $http.post('php/login.php').success(function(data){
                
                for (var i = 0; i < data.length; i++) {
                    
                    if(data[i].correo == $scope.usuario.email && data[i].contrasena == $scope.usuario.password){
                        posicion = i;
                        $('#login').modal('hide');
                        $('#formLogin').trigger("reset");
                    }
                }
                
                if (posicion > -1) {
                    $rootScope.usuarioLogueado = {
                        "correo": data[posicion].correo,
                        "cedula": data[posicion].cedula,
                        "nombre": data[posicion].nombre,
                        "primerA": data[posicion].primerApellido,
                        "segundoA" : data[posicion].segundoApellido,
                        "contrasena": data[posicion].contrasena,
                        "direccion": data[posicion].direccion,
                        "rol":data[posicion].userRole
                }
                    var usuario = JSON.stringify($rootScope.usuarioLogueado);
                    console.log(usuario);

                    if($rootScope.usuarioLogueado.rol = "Estudiante"){
                        $('#link-abrir').addClass('hidden'); 
                        $('#link-cerrar').removeClass('hidden');
                        $('#link-cerrar').addClass('show');
                        $("#menu").removeClass("hidden");
                        $("#estudiante").removeClass("hidden");
                    }
                    
                    if($rootScope.usuarioLogueado.rol = "Profesor"){
                        $('#link-abrir').addClass('hidden'); 
                        $('#link-cerrar').removeClass('hidden');
                        $('#link-cerrar').addClass('show');
                        $("#menu").removeClass("hidden");
                        $("#reportes-menu").removeClass("hidden");
                        $("#grupo2").removeClass("hidden");
                        $("#estudiante").addClass("hidden");

                    }
                    if($rootScope.usuarioLogueado.rol = "DirectorCarrera"){
                        $('#link-abrir').addClass('hidden'); 
                        $('#link-cerrar').removeClass('hidden');
                        $('#link-cerrar').addClass('show');
                        $("#menu").removeClass("hidden");
                        $("#reportes-menu").addClass("hidden");
                        $("#grupo2").addClass("hidden");
                        $("#grupo").removeClass("hidden");

                    }
                    if($rootScope.usuarioLogueado.rol = "Administrador"){
                        $('#link-abrir').addClass('hidden'); 
                        $('#link-cerrar').removeClass('hidden');
                        $('#link-cerrar').addClass('show');
                        $("#menu").removeClass("hidden");
                        $("#reportes-menu").removeClass("hidden");
                        $("#grupo2").removeClass("hidden");
                        $("#estudiante").removeClass("hidden");
                        $("#img-configuracion").removeClass("hidden");

                    }
                };
            });
        }
    }   
});

function salir(){
    $("#menu").removeClass('show');
    $("#menu").addClass('hidden');
    $('#link-abrir').removeClass('hidden'); 
    $('#link-cerrar').removeClass('show');
    $('#link-cerrar').addClass('hidden');
    $("#estudiante").addClass("hidden");
    $("#grupo").addClass("hidden");
    $("#reportes").addClass("hidden");
    $("#grupo2").addClass("hidden"); 
};