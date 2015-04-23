var app = angular.module("moduleReport", ['ngResource','ngRoute']);

app.controller("ReportesController", function ($scope, $http, dataResource,$rootScope) {
  
  $http.get('php/reportes.php').success(function (data) {
    $scope.usuarios = data;
    console.log(data);
  });

});

function myFunction() {
  var hidenn = document.getElementById("reportes").style.visibility = "hidden";
  var resultado = document.getElementById("resultado")
    window.print(resultado);
};

function show(){
  var hidenn = document.getElementById("reportes").style.visibility = "visible";
}
