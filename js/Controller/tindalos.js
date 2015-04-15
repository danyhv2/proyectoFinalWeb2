(function() {
    var tindalos = angular.module('tindalos', ['ui.router']);

    tindalos.controller('tindalosController', function($scope) {

      $scope.alertaPrueba = function(){
        alert("Yikes!");
      }

    }); 
})();