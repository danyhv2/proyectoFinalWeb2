(function(){
var modulePortafolio = angular.module('modulePortafolio', []);
modulePortafolio.controller('PortafolioCtrl', function($scope, $http, $location){

	
		$scope.miNombre= 'Roy Solera Quiros';
		$scope.miCorreo = 'sq16roy@gmail.com';
		$scope.miTel = '86108951';
		$scope.miDir = 'San Ramon, Alajuela, Costa Rica';
		$scope.miFoto = 'http://academyofldsdentists.com/site/wp-content/uploads/Cody-passport-photo-2x2.jpg';
		$scope.miDesc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Nuevo trabajo';

		$scope.proyectos=[
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'https://carlosazaustre.es/blog/content/images/2014/12/angular_bg1-3.png'},
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.md-imagen.com/wp-content/uploads/2013/07/Screen%20shot%202013-07-09%20at%204.54.43%20PM-1024x647.png'},
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.md-imagen.com/wp-content/uploads/2013/07/Screen%20shot%202013-07-09%20at%204.54.43%20PM-1024x647.png'},
		{nombre:'Cool Stuff',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.seuba.com/web/wp-content/uploads/2012/12/img-contenido-web-diseno1.jpg'},
		{nombre:'Full Colors',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://www.md-imagen.com/wp-content/uploads/2013/07/Screen%20shot%202013-07-09%20at%204.54.43%20PM-1024x647.png'},	
		{nombre:'Compu mundo',por:'Roy Solera',pagina:'https://www.ucenfotec.ac.cr/',tecnologias:'php,Angular,Javascript',url:'http://d1qv53vvfy0ptp.cloudfront.net/wp-content/uploads/di/2013/02/12-fascinating-portfolio-websites-1.jpg'}
		
		
		];
		$scope.no= false;
		$scope.imprimirPortafolio = function () {
			$scope.no= true;
			$scope.imprimirPortafolio2 = function () {
			$scope.no= false;
			};
		};
			$scope.imprimirPortafolio3 = function () {
				window.print();
			};
		$scope.go = function ( path ) {
  			$location.path( path );
  			//<button ng-click="go('#home')" class="btn simpleColor">aa</button>
		};
		$scope.borrarTrabajo = function ( proyecto ) {
  			var i = $scope.proyectos.indexOf(proyecto);
			$scope.proyectos.splice(i,1);
		};
		$scope.agregarTrabajo = function () {
			$scope.proyectos.push({nombre:$scope.nombreProyecto, por:$scope.hechoPor, url:$scope.urlImagen, tecnologias:$scope.tecnologias, pagina:$scope.urlPagina});
			$scope.nombreProyecto= '';
			$scope.hechoPor= '';
			$scope.urlImagen= '';
			$scope.tecnologias= '';
			$scope.urlPagina= '';
		};
		$scope.limpiar = function(){
			$scope.nombreProyecto= '';
			$scope.hechoPor= '';
			$scope.urlImagen= '';
			$scope.tecnologias= '';
			$scope.urlPagina= '';
		};
		$scope.editarInfo = function () {
			if ($scope.miNombre2!=undefined) {
				$scope.miNombre= $scope.miNombre2;
				$scope.miCorreo = $scope.miCorreo2;
				$scope.miTel = $scope.miTel2;
				$scope.miDir = $scope.miDir2;
				$scope.miFoto = $scope.miFoto2;
				$scope.miDesc = $scope.miDesc2;
				
			};
		};


});
})();