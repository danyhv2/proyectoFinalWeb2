// Code goes here
angular.module('agregarCarrera', [])
  

  .controller('addCarreraCtrl', function($scope) {
     var carreras=[];
   $scope.validateCarrera = function () {
  
    if ($scope.userForm.$valid == true) {
      $scope.newCarrera = {
        'Carrera': $scope.nombreCarrera,
        'Codigo': $scope.codigoCarrera,
        'Director': $scope.dirCarrera
      };
      $('#msgSuccess').css('display', 'block');
      $('#msgSuccess').fadeOut(3000);
      carreras.push($scope.newCarrera);
      localStorage.setItem('carreras', JSON.stringify(carreras));
      $('.formUser').trigger('reset');
    };
  }

  });