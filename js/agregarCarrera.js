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
      $('#modalExitoCarrera').fadeIn(1000);
      $('#modalExitoCarrera').fadeOut(4000);
      carreras.push($scope.newCarrera);
      localStorage.setItem('carreras', JSON.stringify(carreras));
      $('.formUser').trigger('reset');
    };
  }

  });