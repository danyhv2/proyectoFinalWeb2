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
      $('#msgSuccess')
        .css('display', 'block');
      carreras.push($scope.newCarrera);
      localStorage.setItem('carreras', JSON.stringify(carreras));
    };
  }

  });