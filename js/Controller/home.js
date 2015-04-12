var moduleHome = angular.module('moduleHome', ['ngResource','ngRoute']);

moduleHome.controller('CarouselDemoCtrl', function($scope) {

  $scope.myInterval = 4000; //Duracion entre cada img
  $scope.slides = [
    {
      image: 'img/noticias/noticia.jpg'
    },
    {
      image: 'img/noticias/noticia2.jpg'
    },
    {
      image: 'img/noticias/noticia3.jpg'
    },
    {
      image: 'img/noticias/noticia4.jpg'
    }
  ];
});

moduleHome.controller("proyectoshomeController", function ($scope, $http, dataResource,$rootScope) {
	$http.get('data/proyectos.json').success(function (data) {
        $scope.Mejoresproyectos = data;

        $("#uno").click(function(){
        	$("#cuatro").removeClass ("hidden");
        	$("#cuatro").addClass ("show");
        	$("#cinco").removeClass ("show");
        	$("#cinco").addClass ("hidden");
        	$("#seis").removeClass ("show");
        	$("#seis").addClass ("hidden");
        });
        $("#dos").click(function(){
        	$("#cinco").removeClass ("hidden");
        	$("#cinco").addClass ("show");
        	$("#cuatro").removeClass ("show");
        	$("#cuatro").addClass ("hidden");
        	$("#seis").removeClass ("show");
        	$("#seis").addClass ("hidden");
        });
        $("#tres").click(function(){
        	$("#seis").removeClass ("hidden");
        	$("#seis").addClass ("show");
        	$("#cuatro").removeClass ("show");
        	$("#cuatro").addClass ("hidden");
        	$("#cinco").removeClass ("show");
        	$("#cinco").addClass ("hidden");
        });

    });
    
    $scope.datosResource = dataResource.get();
});

moduleHome.factory("dataResource", function ($resource) {
    return $resource("data/proyectos.json", 
        { get: { method: "GET", isArray: true }
    })
});

