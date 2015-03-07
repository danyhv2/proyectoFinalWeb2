angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages', 'ui.bootstrap.demo', 'routerApp'])
.controller('AppCtrl', function($scope) {
  $scope.project = [
  {
    description: '',
    rate: 500
  },
  {
  	role:'estudiante',
  	descripcion:''
  },
  {
  	role:'administrador',
  	descripcion:''
  }
  ]
  $scope.toppings = [
    { category: 'meat', name: 'Pepperoni' },
    { category: 'meat', name: 'Sausage' },
    { category: 'meat', name: 'Ground Beef' },
    { category: 'meat', name: 'Bacon' },
    { category: 'veg', name: 'Mushrooms' },
    { category: 'veg', name: 'Onion' },
    { category: 'veg', name: 'Green Pepper' },
    { category: 'veg', name: 'Green Olives' },
  ];
});