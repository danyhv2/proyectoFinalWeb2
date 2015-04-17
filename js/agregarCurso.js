// Code goes here
angular.module('agregarCurso', [])
  

  .controller('addCursoCtrl', function($scope) {
    $scope.validValues = ['0','1','2','3','4','5','6','7','8','9'];
     var cursos=[];
   $scope.validateCurso = function () {
  
    if ($scope.userForm.$valid == true) {
      $scope.newCurso = {
        'Curso': $scope.nombreCurso,
        'Cuatrimestre': $('.optCuatri').find('span').text(),
        'AnoLectivo': $('.optAno').find('span').text(),
        'Horario': $scope.horarioCurso,
        'Creditos': $scope.creditosCurso,
        'Codigo': $scope.codCurso,
      };
      $('#formCurso').trigger("reset");
      $('#modalExitoCurso').fadeIn(1000);
      $('#modalExitoCurso').fadeOut(4000);
      cursos.push($scope.newCurso);
      localStorage.setItem('cursos', JSON.stringify(cursos));

    };
  }

  });