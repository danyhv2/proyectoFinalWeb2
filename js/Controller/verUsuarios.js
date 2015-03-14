// Code goes here
angular.module('verUsuarios', [])
  .controller('verUserCtrl', function($scope) {
   $scope.usuarios = [
    {
      nombre: 'Marcela',
      primerApellido: 'Hernández',
      segundoApellido: 'Villafuerte',
      correo: 'mhernandezv@ucenfotec.ac.cr',
      direccion: 'San José, Pavas',
      fechaNacimiento: '27/04/1990',
      cedula: 123456789,
      role: 'Estudiante'
    },
    { 
      nombre: 'Roy',
      primerApellido: 'Solera',
      segundoApellido: 'Quirós',
      correo: 'rsoleraq@ucenfotec.ac.cr',
      direccion: 'Alajuela, San Ramón',
      fechaNacimiento: '01/09/1991',
      cedula: 113890968,
      role: 'Estudiante'
    },
    { 
      nombre: 'María',
      primerApellido: 'Castro',
      segundoApellido: 'Pérez',
      correo: 'mcastrop@ucenfotec.ac.cr',
      direccion: 'San José',
      fechaNacimiento: '12/05/1980',
      cedula: 923456781,
      role: 'Director de Carrera'
    },
    { 
      nombre: 'Pedro',
      primerApellido: 'Morales',
      segundoApellido: 'Arroyo',
      correo: 'pmoralesa@ucenfotec.ac.cr',
      direccion: 'Heredia',
      fechaNacimiento: '05/11/1979',
      cedula: 123456789,
      role: 'Administrador'
    }

    
  ];


$scope.verMas = function(index){
if(index == 0){
  $("<div class="+'containerModal'+"><div class="+'info '+"><h2>"+$scope.usuarios[0].nombre+' '+$scope.usuarios[0].primerApellido+' '+$scope.usuarios[0].segundoApellido+"</h2><p>"+$scope.usuarios[0].correo+"</p><p><span>Fecha de Nacimiento: </span>"+$scope.usuarios[0].fechaNacimiento+"</p><p><span>Dirección: </span>"+$scope.usuarios[0].direccion+"</p><p><span>Cédula:</span>"+$scope.usuarios[0].cedula+"</p><p><span>Role: </span>"+$scope.usuarios[0].role+"</p></div><div class="+'contImgUser'+"><img src="+'img/user3.png'+"></div></div></div>").insertBefore($('.modal-footer'));
  $('.info').addClass('col-xs-7 col-xs-offset-1');
  $('.containerModal').addClass('row');
  $('.contImgUser').addClass('col-xs-4');
}

if(index == 1){
  $("<div class="+'containerModal'+"><div class="+'info '+"><h2>"+$scope.usuarios[1].nombre+' '+$scope.usuarios[1].primerApellido+' '+$scope.usuarios[1].segundoApellido+"</h2><p>"+$scope.usuarios[1].correo+"</p><p><span>Fecha de Nacimiento: </span>"+$scope.usuarios[1].fechaNacimiento+"</p><p><span>Dirección: </span>"+$scope.usuarios[1].direccion+"</p><p><span>Cédula: </span>"+$scope.usuarios[1].cedula+"</p><p><span>Role: </span>"+$scope.usuarios[1].role+"</p></div><div class="+'contImgUser'+"><img src="+'img/user4.png'+"></div></div></div>").insertBefore($('.modal-footer'));
  $('.info').addClass('col-xs-7 col-xs-offset-1');
  $('.containerModal').addClass('row');
  $('.contImgUser').addClass('col-xs-4');
}
if(index == 2){
  $("<div class="+'containerModal'+"><div class="+'info '+"><h2>"+$scope.usuarios[2].nombre+' '+$scope.usuarios[2].primerApellido+' '+$scope.usuarios[2].segundoApellido+"</h2><p>"+$scope.usuarios[2].correo+"</p><p><span>Fecha de Nacimiento: </span>"+$scope.usuarios[2].fechaNacimiento+"</p><p><span>Dirección: </span>"+$scope.usuarios[2].direccion+"</p><p><span>Cédula: </span>"+$scope.usuarios[2].cedula+"</p><p><span>Role: </span>"+$scope.usuarios[2].role+"</p></div><div class="+'contImgUser'+"><img src="+'img/user5.png'+"></div></div></div>").insertBefore($('.modal-footer'));
  $('.info').addClass('col-xs-7 col-xs-offset-1');
  $('.containerModal').addClass('row');
  $('.contImgUser').addClass('col-xs-4');
}
if(index == 3){
  $("<div class="+'containerModal'+"><div class="+'info '+"><h2>"+$scope.usuarios[3].nombre+' '+$scope.usuarios[3].primerApellido+' '+$scope.usuarios[3].segundoApellido+"</h2><p>"+$scope.usuarios[3].correo+"</p><p><span>Fecha de Nacimiento: </span>"+$scope.usuarios[3].fechaNacimiento+"</p><p><span>Dirección: </span>"+$scope.usuarios[3].direccion+"</p><p><span>Cédula: </span>"+$scope.usuarios[3].cedula+"</p><p><span>Role: </span>"+$scope.usuarios[3].role+"</p></div><div class="+'contImgUser'+"><img src="+'img/user-2-32.png'+"></div></div></div>").insertBefore($('.modal-footer'));
  $('.info').addClass('col-xs-7 col-xs-offset-1');
  $('.containerModal').addClass('row');
  $('.contImgUser').addClass('col-xs-4');
}

}


 $('.cerrarModal').click(function(){
  $('.containerModal').remove();
  $("#modalInfoUser").modal('hide');
  console.log('test');
 });
    
  });