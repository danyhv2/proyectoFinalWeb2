var app = angular.module("moduleDocs", ['ngResource','ngRoute']);
 
app.controller("documentosController", function ($scope, $http, dataResource,$rootScope) {


    $http.get('data/documento.json').success(function (data) {
        $scope.documentosTotales = data;
    });

    $http.get('data/proyectos.json').success(function (data) {
        $scope.Mejoresproyectos = data;
    });
    
    $scope.datosResource = dataResource.get();

     $scope.visualizarDoc = function(index,event){
        $http.get('data/documento.json').success(function (data) {
        $scope.documentosmostrar = data;

            window.open($scope.documentosmostrar[index].documento)
            console.log(data)
        });

    };
    
   /* var timeoutHandle = window.setTimeout(function(){
        $("#message1").addClass('hide');

    });

    $(".errorArchivo").addClass('hide');*/

   
    
    $scope.guardarDocumento = function(){

        if ($scope.documentForm.$valid == true){
        
        var titulo = $scope.documento.titulo;
        var grupo = $scope.documento.grupo;
        var descripcion = $scope.documento.descripcion;
        var documentoNuevo = new Object();
        var fechaDocumento = new Date();

        documentoNuevo.titulo = titulo;
        documentoNuevo.grupo = grupo;
        documentoNuevo.descripcion = descripcion;
        documentoNuevo.fecha = fechaDocumento.getDate() + '/' + fechaDocumento.getMonth() + '/' + fechaDocumento.getFullYear();


        $scope.documentosTotales.push(documentoNuevo);

        $scope.documento.titulo = " ";
        $scope.documento.descripcion = " ";
        $scope.documento.grupo = " ";


        $('#myModal').modal('hide');
        window.clearTimeout(timeoutHandle);

            /*$("#message1").removeClass('hide');
            timeoutHandle = window.setTimeout(function(){
                $("#message1").addClass('hide');
            }, 2000);*/

       
        JSON.stringify(documentoNuevo);    
        console.log(documentoNuevo);

         return false 

    }else{
        
        $("#alert-error").removeClass('hide');
        $("#alert-error").addClass('show');
        
        timeoutHandle = window.setTimeout(function(){
            $("#alert-error").removeClass('show');
            $("#alert-error").addClass('hide');
        }, 2000);
        
        $scope.documento.titulo = " ";
        $scope.documento.descripcion = " ";
        $scope.documento.grupo = " ";

    };
}

    $scope.ver = 1;
});


app.factory("dataResource", function ($resource) {
    return $resource("data/documento.json", 
        { get: { method: "GET", isArray: true }
    })
});


