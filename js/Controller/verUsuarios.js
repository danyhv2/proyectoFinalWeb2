// Code goes here
angular.module('verUsuarios', [])
  .controller('verUserCtrl', function($scope) {
   $scope.usuarios = [
    {
      nombre: 'Marcela',
      primerApellido: 'Hernández',
      segundoApellido: 'Villafuerte',
      correo: 'mhernandezv@ucenfotec.ac.cr',
      direccion: 'San José',
      cedula: 123456789,
      role: 'Estudiante'
    },
    { 
      nombre: 'Roy',
      primerApellido: 'Solera',
      segundoApellido: 'Quirós',
      correo: 'rsoleraq@ucenfotec.ac.cr',
      direccion: 'Alajuela',
      cedula: 113890968,
      role: 'Estudiante'
    },
    { 
      nombre: 'María',
      primerApellido: 'Castro',
      segundoApellido: 'Pérez',
      correo: 'mcastrop@ucenfotec.ac.cr',
      direccion: 'San José',
      cedula: 923456781,
      role: 'Director de Carrera'
    },
    { 
      nombre: 'Pedro',
      primerApellido: 'Morales',
      segundoApellido: 'Arroyo',
      correo: 'pmoralesa@ucenfotec.ac.cr',
      direccion: 'Heredia',
      cedula: 123456789,
      role: 'Administrador'
    }
    
  ];


$scope.verMas = function(index){
  console.log($('.usernombre').eq(index).text());
  $('.modalBodyUser').append("<div><div class="+'info'+"><h2>Daniela Hernández Villafuerte</h2><p>dhernandezv@ucenfotec.ac.cr</p><p>Fecha de nacimiento: 02/02/1989</p><p>San José, Pavas</p><p>Cédula: 123456789</p><p>Role: Estuidante</p></div><div class="+'contImgUser'+"><img src="+'img/user3.png'+"></div></div></div>");


  if(index ==0){
    console.log($scope.usuarios[0].nombre);
  }
 }


    

  });