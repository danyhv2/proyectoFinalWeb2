
var moduleVotacion = angular.module('moduleVotacion', []);

moduleVotacion.controller('VotacionCtrl', function($scope) {

	$scope.project=[
		{'id':'1',
		 'nombre': 'DMGCoders',
		 'imgProject': 'img/project/project1.png'
		},
		{'id':'2',
		 'nombre': 'Innova Solutions',
		 'imgProject': 'img/project/project2.png'
		},
		{'id':'3',
		 'nombre': 'Uniqlo',
		 'imgProject': 'img/project/project3.png'
		},
		{'id':'4',
		 'nombre': 'Hero',
		 'imgProject': 'img/project/project4.png'	
		}
	];

	console.log('hola');

});