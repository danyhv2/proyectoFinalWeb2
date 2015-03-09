var route = angular.module('rutas', ['ui.router', 'module', 'routerApp', 'moduleDocs','moduleReport']);

route.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/usuario');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
          .state('grupo', {
            url: '/grupo',
            templateUrl: 'pages/_opcionesDirector.html'
        })

           .state('configuracion', {
            url: '/configuracion',
            templateUrl: 'pages/_opcionesConfig.html'
        })
           .state('documentos', {
            url: '/documentos',
            templateUrl: 'pages/_documentos.html'
        })
            .state('grupo2', {
            url: '/grupo2',
            templateUrl: 'views/_ingresarGrupo.html',
            controller: 'gruposController'
        })
        
         .state('reportes', {
            url: '/reportes',
            templateUrl: 'pages/_reportes.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                
});