// Code goes here
var carrera = angular.module('agregarCarrera', [])
  

  carrera.controller('addCarreraCtrl', function($scope, getDirCarrera, $http) {
     var carreras=[];
   $scope.validateCarrera = function () {
  
    if ($scope.userForm.$valid == true) {
      /*$scope.newCarrera = {
        'Carrera': $scope.nombreCarrera,
        'Codigo': $scope.codigoCarrera,
        'Director': $('.optionsDirector').find('span').text()
      };*/
      $http.post('php/ingresarCarrera.php', { 'nombre' : $scope.nombreCarrera, 'codigo':$scope.codigoCarrera, 'directorCarrera': ($('.optionsDirector').find('.md-select-label').eq(0).text()) }).
      success(function(dataCarrera, status) {
      $scope.status = status;
      $scope.data = dataCarrera;
      $scope.result = dataCarrera;
      //console.log(data);
    })
        
      $('#modalExitoCarrera').fadeIn(1000);
      $('#modalExitoCarrera').fadeOut(4000);
      //carreras.push($scope.newCarrera);
      //localStorage.setItem('carreras', JSON.stringify(carreras));
      $('.formUser').trigger('reset');
    };
    

  }
  getDirCarrera.async().then(function(datos) {
      $scope.data = datos;
    });


  });

 
carrera.factory('getDirCarrera', function($http) {
  var getDirCarrera = {
    async: function() {
      var promise = $http.get('php/getDirectoresCarrera.php').then(function (response) {
        return response.data;
      });
      return promise;
    }
  };
  return getDirCarrera;
});

carrera.factory('addCarrera', function($http) {
 
});