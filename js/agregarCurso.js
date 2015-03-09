// Code goes here
angular.module('agregarCurso', [])
  

  .controller('addCursoCtrl', function($scope) {
     var cursos=[];
   $scope.validateCurso = function () {
  
    if ($scope.userForm.$valid == true) {
      $scope.newCurso = {
        'Curso': $scope.nombreCurso,
        'Cuatrimestre': $scope.cuatrimestre,
        'AnoLectivo': $scope.anoLectivo,
        'Horario': $scope.horarioCurso,
        'Creditos': $scope.creditosCurso,
        'Codigo': $scope.codCurso,
      };
      $('#msgSuccess')
        .css('display', 'block');
      cursos.push($scope.newCurso);
      localStorage.setItem('cursos', JSON.stringify(cursos));
    };
  }

  });