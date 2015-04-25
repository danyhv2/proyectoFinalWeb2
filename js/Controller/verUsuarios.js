// Code goes here
angular.module('verUsuarios', [])
  .controller('verUserCtrl', function($scope, $http) {
  
  $http.post('php/obtenerUsuarios.php').
        success(function(data) {
          $scope.data = data;
          console.log(data);

    $scope.verMas = function(index){
      console.log(index);

      $("<div class="+'containerModal'+"><div class="+'info '+"><h2>"+data[index].nombre+' '+data[index].primerApellido+' '+data[index].segundoApellido+"</h2><p>"+data[index].correo+"</p><p><span>Fecha de Nacimiento: </span>"+data[index].fechaNacimiento+"</p><p><span>Dirección: </span>"+data[index].direccion+"</p><p><span>Cédula:</span>"+data[index].cedula+"</p><p><span>Role: </span>"+data[index].role+"</p></div><div class="+'contImgUser'+"><img src="+'uploads/usuarios/avatar.png'+"></div></div></div>").insertBefore($('.modal-footer'));
      $('.info').addClass('col-xs-7 col-xs-offset-1');
      $('.containerModal').addClass('row');
      $('.contImgUser').addClass('col-xs-4');
          
  }
})

  $('.cerrarModal').click(function(){
  $('.containerModal').remove();
  $("#modalInfoUser").modal('hide');
 });
    
});