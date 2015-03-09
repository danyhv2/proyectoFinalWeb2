var route = angular.module('rutas', ['ui.router', 'module', 'routerApp', 'moduleDocs','moduleReport']);

route.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider

	// HOME STATES AND NESTED VIEWS ========================================
	.state('home', {
		url: '/',
		templateUrl: 'pages/_home.html'
	})
		.state('perfil', {
			url: '/perfil',
			templateUrl: 'pages/_perfil.html',
			controller: 'PerfilCtrl'
		})
		.state('grupo', {
			url: '/grupo',
			templateUrl: 'pages/_opcionesDirector.html'
		})
		.state('portafolio', {
			url: '/portafolio',
			templateUrl: 'pages/_portafolio.html',
			controller: 'PortafolioCtrl'
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
			templateUrl: 'pages/_navProfesor.html',
			controller: 'gruposController'
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
});

	// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================

/*           .state('configuracion', {
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
        })*/
        
    // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                