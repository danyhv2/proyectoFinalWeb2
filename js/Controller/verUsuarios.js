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

    

  });