var app = angular.module("moduleReport", ['ngResource','ngRoute']);

app.controller("ReportesController", function ($scope, $http, dataResource,$rootScope) {
	  $scope.usuarios = [
      {
        img : 'img/imagen-reportes1.png',
        Nombre: 'Melissa Rosales Mora',
        Correo: 'mrosalesm@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes2.png',
        Nombre: 'Daniela Hernandez Villafuerte',
        Correo: 'dhernandez@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes3.png',
        Nombre: 'Daniel Campos Arce',
        Correo: 'dcamposam@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes4.png',
        Nombre: 'Roy Solera',
        Correo: 'rsolera@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes1.png',
        Nombre: 'Gulliermo Sanchez',
        Correo: 'msanchez@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes2.png',
        Nombre: 'Vannesa Rodríguez Arce',
        Correo: 'vrodrígueza@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes3.png',
        Nombre: 'Esteban Picado Pérez',
        Correo: 'epicadop@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes4.png',
        Nombre: 'Monica Estrada Ruiz',
        Correo: 'mestradar@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes1.png',
        Nombre: 'Mario Vasquez Naranjo',
        Correo: 'mvasqueznm@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes2.png',
        Nombre: 'Maria Cruz Díaz',
        Correo: 'mcruzdm@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes3.png',
        Nombre: 'Gabriela Durán Campos',
        Correo: 'gduránc@ucenfotec.ac.cr',
      },
      {
        img : 'img/imagen-reportes4.png',
        Nombre: 'Jorge Víquez Román',
        Correo: 'jvíquezr@ucenfotec.ac.cr',
      }
    ];
});

function myFunction() {
  var resultado = document.getElementById("resultado")
    window.print(resultado);
};
