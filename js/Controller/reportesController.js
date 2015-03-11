var app = angular.module("moduleReport", ['ngResource','ngRoute']);

app.controller("ReportesController", function ($scope, $http, dataResource,$rootScope) {
	  $scope.usuarios = [
      {
        img : 'img/imagen-reportes1.png',
        Nombre: 'Melissa Rosales Mora',
        Correo: 'mrosalesm@ucenfotec.ac.cr',
        Carreras: "Diseño y Desarrollo Web, Desarrollo de Software",
        Curso1: "Proyecto de desarrollo web 1",
        Curso2: "Proyecto de ingeniería del software 1",
        Codigo1: "01",
        Codigo2: "02",
        Credito1: "6",
        Credito2: "6",
        Cuatrimestre1: "I,2012",
        Cuatrimestre2: "II,2012",
        Equipo1: "Quatro Media",
        Rol1: "Calidad",
        Proyecto1:"LogiNet",
        Calificacion1: "50",
        Equipo2: "DMGCODERS",
        Rol2: "Coordinadora",
        Proyecto2:"Virtual-Record",
        Calificacion2: "78.9",
        Integrantes1:"Erick Sanchez/Coordinador",
        Integrantes2:"Carlos Obregon/Soporte",
        Integrantes3:"Cinthya Gutiérrez/Desarrollo",
        Integrantes4:"Manuel Zuñiga/Calidad",
        Integrantes5:"Daniela Hernández/Desarrollo",
        Integrantes6:"Roy Solera/Calidad",
        Integrantes7:"Guillermo Snachez/Desarrollo",
        Integrantes8:"Daniel Campos/Calidad",
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
  var hidenn = document.getElementById('reportes').style.visibility = "hidden";
  var resultado = document.getElementById("resultado")
    window.print(resultado);
};

function show(){
  var hidenn = document.getElementById('reportes').style.visibility = "visible";
}
