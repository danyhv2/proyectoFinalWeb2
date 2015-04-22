var route = angular.module('rutas', ['ui.router', 'module', 'routerApp', 'moduleDocs','moduleReport','moduleLogin']);

route.config(function($stateProvider, $urlRouterProvider) {
    
    /*$urlRouterProvider.otherwise('/');*/
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
	  .state('home', {
		url: '/',
		templateUrl: 'pages/_home.html'
	})
	.state('perfil', {
		url: '/perfil',
		templateUrl: 'pages/_perfil.html',
	})
          .state('grupo', {
            url: '/grupo',
            //templateUrl: 'pages/_opcionesDirector.html',
             views: {
                '': { 
                templateUrl: 'pages/_opcionesDirector.html'
                },
                'grupo-cursos@grupo': { 
                    templateUrl: 'pages/mobile/_mobileCursosDirector.html' 
                },
                'grupo-carreras@grupo': { 
                    templateUrl: 'pages/mobile/_mobileCarrerasDirector.html' 
                },
                'nueva-rubrica@grupo': { 
                    templateUrl: 'pages/mobile/_mobileRubricaDirector.html' 
                }
            }
        })
	  .state('portafolio', {
	    url: '/portafolio',
	    templateUrl: 'pages/_portafolio.html',
			controller: 'PortafolioCtrl'
	})

           .state('configuracion', {
            url: '/configuracion',
            views: {
                '': { 
                templateUrl: 'pages/_opcionesConfig.html'
                },
                'verUsuarios@configuracion': { 
                    templateUrl: 'views/_ver-usuario.html' 
                },
                'ingresarUsuarios@configuracion': { 
                    templateUrl: 'pages/mobile/_mobileIngresarUsuarios.html' 
                },
                'modificarUsuarios@configuracion': { 
                    templateUrl: 'pages/mobile/_mobileModificarUsuarios.html' 
                },
                'ingresarCarrera@configuracion': { 
                    templateUrl: 'pages/mobile/_mobileIngresarCarrera.html' 
                },
                'ingresarCurso@configuracion': { 
                    templateUrl: 'pages/mobile/_mobileIngresarCurso.html' 
                }
            }
        })

           .state('documentos', {
            url: '/documentos',
            templateUrl: 'pages/_documentos.html'
        })
            .state('grupo2', {
            url: '/grupo2',
            views:{
                '':{
                templateUrl: 'pages/_navProfesor.html',
                controller: 'gruposController'   
                },
                'crear-grupo@grupo2':{
                    templateUrl: 'pages/mobile/_mobileGrupoProfesor.html',
                    controller: 'gruposController'
                }
            }
        })
        
         .state('reportes', {
            url: '/reportes',
            templateUrl: 'pages/_reportes.html'
        })

        .state('votacion', {
            url: '/votacion',
            templateUrl: 'pages/_tindalos.html'
        })

         .state('estudiante', {
            url: '/estudiante',
            views:{
                '':{
                templateUrl: 'pages/_navEstudianteGrupo.html',
                controller: 'gruposController'   
                },
                'mi-grupo@estudiante':{
                    templateUrl: 'pages/mobile/_mobileMiGrupo.html',
                    controller: 'gruposController'
                },
                'estudiante-nota@estudiante':{
                    templateUrl: 'pages/mobile/_mobileEstudianteNota.html',
                    controller: 'gruposController'
                },
                'estudiante-tarea@estudiante':{
                    templateUrl: 'pages/mobile/_mobileTarea.html',
                    controller: 'gruposController'
                }
            }
        })
         
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
                
});