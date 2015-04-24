(function(){
						<!--//crear app-->
	var modulo = angular.module('crearGrupo', []);
						<!--//fin crear app-->

						<!--//inicio controller-->
		modulo.controller('gruposController', function($scope, $http){
			
						<!--//arreglo estudiantes-->
		$scope.gruposTemp = [];
		$http.get('php/buscarEquipo.php').success(function(data){
            		$scope.temp = data;
            		 $scope.grupoTemp = $scope.temp; 
           			 for(var p=0; p< $scope.grupoTemp.length;p++){
  					 $scope.gruposTemp.push({nombreGrupo : $scope.grupoTemp[p].nombre_grupo});
		$scope.grupos = $scope.gruposTemp;
  					};
        			})
        $scope.cursos =[];
        $scope.cursos1 =[];
        $http.get('php/buscarCursosEquipo.php').success(function(data){
            $scope.cursosTemp = data;
            $scope.cursos1 = $scope.cursosTemp;
        	$scope.cursos =[];
            for (var i = $scope.cursos1.length - 1; i >= 0; i--) {
                $scope.cursos.push({nombre : $scope.cursos1[i].nombre, idCurso : $scope.cursos1[i].id_curso})
            };
        	});
        $scope.mostrarSelecPorCurso = function(cursoEstudiante){
           $scope.estudiantes =[];
        $scope.estudiantes1 =[];
           $http.post('php/buscarEstudiantes.php', {'nombreC' : cursoEstudiante.idCurso}).
             		success(function(data) {
        		console.log(data)
             			$scope.estudiantesTemp = data;
            		$scope.estudiantes1 = $scope.estudiantesTemp;
            	for(var p=0; p< $scope.estudiantes1.length;p++){
                	$scope.estudiantes.push({nombre : $scope.estudiantes1[p].nombre+' '+$scope.estudiantes1[p].primerApellido+' '+$scope.estudiantes1[p].segundoApellido, correo : $scope.estudiantes1[p].correo});
           console.log($scope.estudiantes)
            	};
            	});
        };
        $scope.nuevoEStudianteEquipo = function(){
            $('div.modal-backdrop').removeClass('nada');
            $('#modalNuevoGrupo').fadeIn(200);            
        };
			$scope.proyectos = [
			{
				proyectoName : 'Proyecto #1',
				integrantes :[{nombre:'Roy Solera Quiros', role: 'Calidad'}, 
				{nombre:'Guillermo Sánchez', role:'Soporte'}]
			},
			{
				proyectoName : 'Proyecto #2',
				integrantes :[{nombre:'Daniela Hernández Villafuerte', role: 'Desarrollo'}, 
				{nombre:'Melissa Rosales Mora', role:'Soporte'}
				]
			},
			{
				proyectoName : 'Proyecto #3',
				integrantes :[{nombre:'Guillermo Sánchez', role: 'Calidad'}, 
				{nombre:'Daniel Campos Arce', role:'Soporte'}
				]
			},
			{
				proyectoName : 'Proyecto #4',
				integrantes :[{nombre:'Roy Solera Quiros', role: 'Calidad'}, 
				{nombre:'Daniel Hernández Villafuerte', role:'Coordinador'}
				]
			},
			{
				proyectoName : 'Proyecto #5',
				integrantes :[{nombre:'Daniel Hernández Villafuerte', role: 'Soporte'}, 
				{nombre:'Melissa Rosales Mora', role:'Coordinador'}
				]
			}
			];
			$scope.proyectos2 = [
			{
				proyectoName : 'DMGCoders',
				curso : 'Proyecto Web 1',
				integrantes :[
				{nombre:'Roy Solera Quiros', role: 'Calidad'}, 
				{nombre:'Guillermo Sánchez', role:'Soporte'},
				{nombre:'Daniela Hernández Villafuerte', role:'Calidad'}, 
				{nombre:'Melissa Rosales Mora', role:'Coordinador'},
				{nombre:'Daniel Campos Arce', role:'Desarrollo'}
				]
			}
			];
			$scope.opciones = [
			{
				opcion : 'Seleccionar'
			}

			];
				$scope.GruposArchivos = [
			{
				gPName : 'Grupo#1',
				archivos :[
					{nombre:'Tarea#1', fecha: '13-3-2015', hora : '17:40'},
					{nombre:'Tarea#2', fecha: '13-3-2015', hora : '10:20'}, 
					{nombre:'Tarea#3', fecha: '13-3-2015', hora : '12:00'}
				]
			},
			{
				gPName : 'Grupo#2',
				archivos :[
					{nombre:'Tarea#4', fecha: '13-3-2015', hora : '17:40'},
					{nombre:'Tarea#5', fecha: '13-3-2015', hora : '10:20'}
				]
			},
			{
				gPName : 'Grupo#3',
				archivos :[
					{nombre:'Tarea#6', fecha: '13-3-2015', hora : '17:40'},
					{nombre:'Tarea#7', fecha: '13-3-2015', hora : '10:20'}
				]
			},
			{
				gPName : 'Grupo#4',
				archivos :[
					{nombre:'Tarea#8', fecha: '13-3-2015', hora : '17:40'},
					{nombre:'Tarea#9', fecha: '13-3-2015', hora : '10:20'}
				]
			},
			{
				gPName : 'Grupo#5',
				archivos :[
					{nombre:'Tarea#10', fecha: '13-3-2015', hora : '17:40'},
					{nombre:'Tarea#11', fecha: '13-3-2015', hora : '10:20'}
				]
			}
			];
			$scope.GruposArchivos2 = [
			{
				gPName : 'DMGCoders',
				curso : 'Proyecto Web 1',
				archivos :[
					{nombre:'Tarea#1', fecha: '13-3-2015', hora : '17:40'},
					{nombre:'Tarea#2', fecha: '13-3-2015', hora : '10:20'}, 
					{nombre:'Tarea#3', fecha: '13-3-2015', hora : '12:00'}
					]
			}
			];
			$scope.notasG = [
				//{nombre:'Nombre', valor: 'Guillermo Sanchez Garay'}, 
				{nombre:'Profesor', valor:'Alvaro Cordero'},
				{nombre:'Asistencia', valor:'5'}, 
				{nombre:'Concepto', valor:'12'},
				{nombre:'Tarea1', valor:'11'},
				{nombre:'Tarea2', valor:'4'},
				{nombre:'Examen1', valor:'20'},
				{nombre:'Examen2', valor:'22'},
				{nombre:'Total', valor:'74'}
			];
			$scope.aja= function(){
				console.log($scope.notasG);
			};

						<!--//fin arreglo estudiantes-->

						<!-- //arreglo vacios-->
			$scope.grupos = [
			];
			$scope.muchos = [];
			$scope.muchos2 = [];
			$scope.temps =[];
						<!-- //arreglo vacios-->

						<!-- //funcion ordenar tabla de grupos-->
			$scope.ordenar= function(orden){
				$scope.ordenSeleccionado ='';
				console.log($scope.ordenSeleccionado);
				$scope.ordenSeleccionado = orden;
			};
						<!-- //fin funcion ordenar tabla de grupos-->

						<!-- //funcion agregar estudiantes a arreglo vacio-->
			$scope.addEstudiante=function(){
				var cuentaEstudiantes = 0;
				var cuentaEstudiantes2 = 0;
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
				if ($scope.nuevoEstudiante == undefined) {
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('div#estudiantes').before('<span id="errorEstudiante" class="bg-danger" style="color:#f44336;">Debe seleccionar un estudiante</span>');
				}else if ($scope.nuevoEstudiante == ''){
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('div#estudiantes').before('<span id="errorEstudiante" class="bg-danger" style="color:#f44336;">Debe seleccionar un estudiante</span>');
				}else if($scope.nuevoRole == undefined){
					$('#errorNombreGrupo').detach();
					$('#errorEstudiante').detach();
					$('#errorRoles').detach();
					$('div#roles').before('<span id="errorRoles" class="bg-danger" style="color:#f44336;">Debe seleccionar un role</span>');
				}else if ($scope.nuevoRole == ''){
					$('div#roles').before('<span id="errorRoles" class="bg-danger" style="color:#f44336;">Debe seleccionar un role</span>');
				}else{
					
					/*$scope.correosTemp = [];
					$scope.correoTemp= [];
					$scope.tempCorreo = '';
					$http.get('php/buscarCorreos.php').success(function(data){
            			$scope.temp = data;
            		 	$scope.correoTemp = $scope.temp; 
            			console.log($scope.correoTemp)
           			 	for(var p=0; p< $scope.correoTemp.length;p++){
  					 		$scope.correosTemp.push($scope.correoTemp[p].correoEstudiante);
  						};
  						
							for(var t=0; t< $scope.estudiantes.length;t++){
								if ($scope.estudiantes[t].nombre==$scope.nuevoEstudiante.nombre) {
								$scope.tempCorreo = $scope.estudiantes[t].correo;
  						console.log($scope.tempCorreo)
								break;
							};
						};
  						
        				for(var i=0; i< $scope.correosTemp.length;i++){
					alert($scope.correosTemp[i])
					alert($scope.tempCorreo+1)
  					 		if ($scope.correosTemp[i]==$scope.tempCorreo) {
					console.log($scope.tempCorreo)
  					 			cuentaEstudiantes++;
  					 			$('#errorNombreGrupo').detach();
								$('#errorEstudiante').detach();
								$('#errorRoles').detach();
								$scope.nuevoRole ='';
								$('div#estudiantes').before('<span id="errorEstudiante" class="bg-danger" style="color:#f44336;">Este estudiantes ya esta en un grupo</span>');
  					 			break;
  					 		}
  						};
  					 			alert(cuentaEstudiantes)
						if (cuentaEstudiantes == 1) {
								for(var t=0; t< $scope.muchos.length;t++){
								if ($scope.muchos[t].nombre == $scope.nuevoEstudiante.nombre) {
									cuentaEstudiantes2++;
									$('#errorModiEs').detach();
									$('#errorEstudiante').detach();
									$('div#estudiantes').before('<span id="errorEstudiante" class="bg-danger" style="color:#f44336;">Este estudiante ya esta en la lista para agregar</span>');
								}
							}
						}//*/
						if (cuentaEstudiantes2 == 0) {
									$('#errorModiEs').detach();
									$('#errorEstudiante').detach();
									$('#errorNombreGrupo').detach();
									$('#errorEstudiante').detach();
									$('#errorRoles').detach();
									console.log($scope.estudiantes)
									$scope.tempCorreo = '';
									for(var t=0; t< $scope.estudiantes.length;t++){
										if ($scope.estudiantes[t].nombre==$scope.nuevoEstudiante.nombre) {
											$scope.tempCorreo = $scope.estudiantes[t].correo;
											break;
										};
									};

									$scope.muchos.push({nombre:$scope.nuevoEstudiante.nombre, role:$scope.nuevoRole, correo : $scope.tempCorreo});
									console.log($scope.nuevoEstudiante);
									console.log($scope.muchos);
									console.log($scope.muchos.length);
									$scope.nuevoEstudiante ='';
									$scope.nuevoRole ='';
									$scope.tempCorreo = '';
							}
        			//});
													
					}
				};
						<!-- //fin funcion agregar estudiantes a arreglo vacio-->

						<!-- //funcion agregar nombre de y role de estudiantes a arreglo vacio-->
			$scope.addGrupo=function(){			
      		
      			$scope.grupoTemp =[];
      			$scope.grupos2 =[];

					$http.post('php/insertarEquipo.php', {'nombreG' : $scope.nuevoName}).
             			success(function(dataGrupo, status) {
           			});
					for(var t=0; t< $scope.muchos.length;t++){
						$http.post('php/insertarEstudiantesEquipos.php', {'nombreG' : $scope.nuevoName, 'nombreE' : $scope.muchos[t].correo, 'nombreR' : $scope.muchos[t].role}).
             				success(function(dataGrupo, status) {
            			});
             		};
        			$http.get('php/buscarEquipo.php').success(function(data){
            		$scope.temp = data;
            		 $scope.grupoTemp = $scope.temp; 
           			 for(var p=0; p< $scope.grupoTemp.length;p++){
  					 $scope.grupos2.push({nombreGrupo : $scope.grupoTemp[p].nombre_grupo});
  					};
        			$scope.grupos =[];
        			$scope.grupos = $scope.grupos2;
        			})
				
					console.log($scope.grupos);
					$('#errorEstudiante').detach();
					$('#modalExito').fadeIn(2000);
					$('#modalExito').fadeOut(3000);
         			$('#modalNuevoGrupo').fadeOut(200);
         			$('div.modal-backdrop').addClass('nada');
         			$scope.nuevoName = '';
					$scope.nuevoEstudiante ='';
					$scope.cursoEstudiante ='';
					$scopenuevoRole ='';
					$scope.muchos = [];
      		
					
					//$('<p id="msgSuccess" class="alert alert-success mipos">Grupo creado correctamente.</p>').insertBefore('h1#equip').delay(3000).fadeOut();
		
        };
						<!-- //fin funcion agregar nombre de y role de estudiantes a arreglo vacio-->
			
						<!-- //funciones de remover-->
			
			$scope.removeGrupo=function(grupo){
				var i = $scope.grupos.indexOf(grupo);
				$scope.removeGrupo1=function(){
				$scope.grupos.splice(i,1);
				$('#modalBorrar').fadeIn(2000);
         		$('#modalBorrar').fadeOut(3000);
				};
			};
			$scope.removeGrupo2=function(grupo){
				var i = $scope.muchos.indexOf(grupo);
				$scope.muchos.splice(i,1);

			};
			$scope.removeGrupo3=function(grupo){
				var i = $scope.todos.indexOf(grupo);
				$scope.todos.splice(i,1);

			};
			$scope.removeGrupo4=function(grupo){
				var i = $scope.temps.indexOf(grupo);
				$scope.temps.splice(i,1);
	
			};
			$scope.removeGrupo5=function(todosArchivo){
				var i = $scope.todosArchivos.indexOf(todosArchivo);
				$('#mostrarArchivos').modal('hide');
				$scope.removeGrupo55=function(){
				$scope.todosArchivos.splice(i,1);
				$('#mostrarArchivos').modal('show');	
				};
				$scope.removeGrupo555=function(){
				$('#mostrarArchivos').modal('show');	
				};
			};
			$scope.botonCancelar=function(grupo){
				$('#errorNombreGrupo').detach();
				$('#errorEstudiante').detach();
				$('#errorRoles').detach();
				$('#errorModiEs').detach();
				$scope.nuevoName = '';
				$scope.nuevoEstudiante ='';
				$scope.nuevoEstudiante2 ='';
				$scope.nuevoRole ='';
				$scope.muchos = [];
				$scope.muchos2 = [];
				$scope.temps =[];
				$scope.temps2 =[];
			};
				<!-- //fin funciones de remover-->
				$scope.cerrarArchivos=function(){
				$scope.archivoParaSubir ='';
				$scope.nuevoNameArhivo = '';
				$scope.enviarArchivo = '';
				$('#errorArchivoName').detach();
				$('#errorArchivoUp').detach();
				$('#errorArchivoGrupo').detach();
			};
			$scope.subirArchivos=function(enviarArchivo){
				var contadorArchivos = 0;
				var i = $scope.GruposArchivos.indexOf(enviarArchivo);
					if ($scope.nuevoNameArhivo == undefined) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoName" class="bg-danger" style="color:#f44336;">Debe escribir un nombre para el archivo</span>');
				}else if ($scope.archivoParaSubir == 2) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoUp" class="bg-danger" style="color:#f44336;">Debe selecionar un archivo</span>');
				}else if ($scope.nuevoNameArhivo == '') {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoName" class="bg-danger" style="color:#f44336;">Debe escribir un nombre para el archivo</span>');
				}else if ($scope.archivoParaSubir == 2) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoUp" class="bg-danger" style="color:#f44336;">Debe selecionar un archivo</span>');
				}else if ($scope.enviarArchivo == undefined) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('div#esteA').before('<span id="errorArchivoGrupo" class="bg-danger" style="color:#f44336;">Debe seleccionar un grupo</span>');
				}else if ($scope.enviarArchivo == '') {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('div#esteA').before('<span id="errorArchivoGrupo" class="bg-danger" style="color:#f44336;">Debe seleccionar un grupo</span>');
				}else{
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					for(var x=0; x< $scope.GruposArchivos[i].archivos.length;x++){
							console.log($scope.GruposArchivos[i].archivos[x].nombre);
							console.log($scope.nuevoNameArhivo)
							if (($scope.GruposArchivos[i].archivos[x].nombre) == ($scope.nuevoNameArhivo)) {
								contadorArchivos++;
								$('div#nameArchivo2').before('<span id="errorArchivoName" class="bg-danger" style="color:#f44336;">Ya hay un archivo con ese nombre</span>');
							}else{
								$('#errorArchivoUp').detach();
								$('#errorArchivoGrupo').detach();
							}
						}
						if (contadorArchivos == 0) {
							var dt = new Date();
							var time = dt.getDate() + "-" + (dt.getMonth()+1) + "-" + dt.getFullYear();
							var hora = dt.getHours() + ":" + dt.getMinutes();
							$('#errorArchivoName').detach();
							$('#errorArchivoGrupo').detach();
							$scope.GruposArchivos[i].archivos.push({nombre:$scope.nuevoNameArhivo, fecha: time, hora: hora});
							$('#modalExito').fadeIn(2000);
         					$('#modalExito').fadeOut(3000);
							//$('<p id="msgSuccess" class="alert alert-success mipos">Archivo subido correctamente.</p>').insertBefore('h1#miArch').delay(3000).fadeOut();
							console.log($scope.GruposArchivos[i]);
							$scope.archivoParaSubir ='';
							$scope.nuevoNameArhivo = '';
							$scope.enviarArchivo = '';
							$('#subirArchivos').modal('hide');
						}
				}
			};
			$scope.subirArchivos2=function(enviarArchivo){
				var contadorArchivos = 0;
				var i = $scope.GruposArchivos2.indexOf(enviarArchivo);
					if ($scope.nuevoNameArhivo == undefined) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoName" class="bg-danger" style="color:#f44336;">Debe escribir un nombre para el archivo</span>');
				}else if ($scope.archivoParaSubir == 2) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoUp" class="bg-danger" style="color:#f44336;">Debe selecionar un archivo</span>');
				}else if ($scope.nuevoNameArhivo == '') {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoName" class="bg-danger" style="color:#f44336;">Debe escribir un nombre para el archivo</span>');
				}else if ($scope.archivoParaSubir == 2) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('input#nameArchivo').before('<span id="errorArchivoUp" class="bg-danger" style="color:#f44336;">Debe selecionar un archivo</span>');
				}else if ($scope.enviarArchivo == undefined) {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('div#esteA').before('<span id="errorArchivoGrupo" class="bg-danger" style="color:#f44336;">Debe seleccionar un grupo</span>');
				}else if ($scope.enviarArchivo == '') {
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					$('div#esteA').before('<span id="errorArchivoGrupo" class="bg-danger" style="color:#f44336;">Debe seleccionar un grupo</span>');
				}else{
					$('#errorArchivoName').detach();
					$('#errorArchivoUp').detach();
					$('#errorArchivoGrupo').detach();
					for(var x=0; x< $scope.GruposArchivos2[i].archivos.length;x++){
							if (($scope.GruposArchivos2[i].archivos[x].nombre) == ($scope.nuevoNameArhivo)) {
								contadorArchivos++;
								$('input#nameArchivo').before('<span id="errorArchivoName" class="bg-danger" style="color:#f44336;">Ya hay un archivo con ese nombre</span>');
							}else{
								$('#errorArchivoUp').detach();
								$('#errorArchivoGrupo').detach();
							}
						}
						if (contadorArchivos == 0) {
							var dt = new Date();
							var time = dt.getDate() + "-" + (dt.getMonth()+1) + "-" + dt.getFullYear();
							var hora = dt.getHours() + ":" + dt.getMinutes();
							$('#errorArchivoName').detach();
							$('#errorArchivoGrupo').detach();
							$scope.GruposArchivos2[i].archivos.push({nombre:$scope.nuevoNameArhivo, fecha: time, hora: hora});
							$('#modalExito').fadeIn(2000);
        					$('#modalExito').fadeOut(3000);
							//$('<p id="msgSuccess" class="alert alert-success mipos">Archivo subido correctamente.</p>').insertBefore('h1#miBtn').delay(3000).fadeOut();
							$scope.archivoParaSubir ='';
							$scope.nuevoNameArhivo = '';
							$scope.enviarArchivo = '';
							$('#subirArchivos').modal('hide');
						}
				}
			};

			$scope.mostrarArchivos=function(GruposArchivo){
				var i = $scope.GruposArchivos.indexOf(GruposArchivo);
				$scope.todosArchivos = $scope.GruposArchivos[i].archivos;
				var miDate = $('input#inpFechaInicio').val();
				$scope.mifecha = miDate;
				var miDate2 = $('input#inpFechaFinal').val();
				$scope.mifecha2 = miDate2;
			};
			$scope.mostrarArchivos2=function(GruposArchivo){
				var i = $scope.GruposArchivos2.indexOf(GruposArchivo);
				$scope.todosArchivos2 = $scope.GruposArchivos2[i].archivos;
				console.log($scope.todosArchivos2);
				var dt = new Date();
				var time = dt.getDate() + "-" + (dt.getMonth()+1) + "-" + dt.getFullYear();
				$scope.mifecha3 = time;
				
			};
			$scope.mostrarGrupo=function(grupo){
        		$scope.todos =[];
				$scope.todosName =[];
				$scope.todosName2 =[];
				var mio = grupo.nombreGrupo;
				var i = $scope.grupos.indexOf(grupo);
				$scope.todosName.push($scope.grupos[i].nombreGrupo);
				$http.post('php/buscarEstudiantesT.php', {'nombreG1' : mio}).
             		success(function(data) {
        		console.log(data)
             			$scope.estudiantesTemp = data;
            		$scope.todosName2 = $scope.estudiantesTemp;
            	for(var p=0; p< $scope.todosName2.length;p++){
                	$scope.todos.push({nombre : $scope.todosName2[p].nombre+' '+$scope.todosName2[p].primerApellido+' '+$scope.todosName2[p].segundoApellido, role : $scope.todosName2[p].roleEstudiante});
            	};
            	});
			};
			$scope.mostrarIntegrantes2=function(proyecto){
				var i = $scope.proyectos2.indexOf(proyecto);
				$scope.myGrupo = $scope.proyectos2[i].integrantes;
				console.log($scope.myGrupo);
				//console.log($scope.proyectos[i]);
				$scope.todosIntegrantes = $scope.proyectos2[i];
				//console.log($scope.todosIntegrantes);
				
			};
			$scope.mostrarIntegrantes=function(proyecto){
				var i = $scope.proyectos.indexOf(proyecto);
				$scope.myGrupo = $scope.proyectos[i].integrantes;
				console.log($scope.myGrupo);
				console.log($scope.proyectos[i]);
				$scope.todosIntegrantes = $scope.proyectos[i];
				console.log($scope.todosIntegrantes);
				
			};
			$scope.enviarProyectos =[];
			$scope.mostrarProyectosVotacion=function(proyecto){
				var contar = 0;
				//console.log(proyecto.nuevoEnviado.opcion);
				//console.log($scope.enviarProyectos);
				var i = $scope.proyectos.indexOf(proyecto);
				if (proyecto.nuevoEnviado == true) {
					$scope.temProyectos =[];
					$scope.enviarProyectos.push($scope.proyectos[i].proyectoName);
					console.log($scope.enviarProyectos);
					
				}else if (proyecto.nuevoEnviado == false) {
					var i = $scope.enviarProyectos.indexOf(proyecto.proyectoName);
					$scope.enviarProyectos.splice(i,1);
					console.log($scope.enviarProyectos);

				}
			};

			$scope.addEstudiante2=function(grupo){
				var cuentaEstudiantes = 0;
				var cuentaEstudiantes2 = 0;
				console.log($scope.grupos);
				if ($scope.nuevoEstudiante2 == undefined) {
					$('#errorModiEs').detach();
					$('div#estudiantes2').before('<span id="errorModiEs" class="bg-danger" style="color:#f44336;">Debe seleccionar un estudiante</span>');
				}else if ($scope.nuevoEstudiante2 == ''){
					$('#errorModiEs').detach();
					$('div#estudiantes2').before('<span id="errorModiEs" class="bg-danger" style="color:#f44336;">Debe seleccionar un estudiante</span>');
				}else{
					for(var p=0; p< $scope.grupos.length;p++){
							console.log($scope.grupos[0]);
							for(var v=0; v< $scope.grupos[p].misEstudiantes.length;v++){
								console.log($scope.grupos[p].misEstudiantes.length);
								if ($scope.nuevoEstudiante2.nombre == $scope.grupos[p].misEstudiantes[v].nombre) {
										cuentaEstudiantes++;
										console.log($scope.grupos[p].misEstudiantes[v]);
										$('#errorModiEs').detach();
										$('#errorEstudiante').detach();
										$('#errorRoles').detach();
										$('div#estudiantes2').before('<span id="errorEstudiante" class="bg-danger" style="color:#f44336;">Este estudiantes ya esta en un grupo</span>');
								}
							}	
							}	
						if (cuentaEstudiantes == 0) {
							for(var t=0; t< $scope.temps.length;t++){
								if ($scope.temps[t].nombre == $scope.nuevoEstudiante2.nombre) {
									cuentaEstudiantes2++;
									$('#errorModiEs').detach();
									$('#errorEstudiante').detach();
									$('div#estudiantes2').before('<span id="errorEstudiante" class="bg-danger" style="color:#f44336;">Este estudiante ya esta en la lista para agregar</span>');
								}
							}
							if (cuentaEstudiantes2 == 0) {
									$('#errorModiEs').detach();
									$('#errorEstudiante').detach();
									$scope.temps.push({nombre:$scope.nuevoEstudiante2.nombre, role:$scope.role});
									console.log($scope.temps);
									$scope.nuevoEstudiante2 ='';
							}
						}				
				}
			};
			$scope.guardar=function(grupo){
				console.log($scope.temps);
				$scope.temps2 = [];
				$scope.temps2= $scope.temps;
				console.log($scope.temps2);
				console.log($scope.temps2.length);
				for(var r=0; r< $scope.temps2.length;r++)
					{
						//$scope.todos.push({nombre:$scope.temps2[r].nombre,role:$scope.temps2[r].role});
					}
					$('#modalEditar').fadeIn(2000);
         			$('#modalEditar').fadeOut(3000);
					//$('<p id="msgSuccess" class="alert alert-success mipos">Edición completada.</p>').insertBefore('h1#equip').delay(3000).fadeOut();
				$scope.nuevoEstudiante2 ='';
				$scope.temps =[];
				$scope.temps2 =[];
				$('#errorModiEs').detach();
				$('#errorEstudiante').detach();
				console.log($scope.todos);
			};

			
		});
				<!--//fin controller-->

				<!--//rutas-->

		modulo.config(function($stateProvider, $urlRouterProvider) {
    
	    $urlRouterProvider.otherwise('/');
	    
	    $stateProvider
	        
	      	 .state('grupo2.crearGrupo', {
	            url: '/crearGrupo',
	            templateUrl: 'pages/_ingresarGrupo.html',
	            controller : 'gruposController'
	        })
	        .state('grupo2.elegir', {
	            url: '/elegir-proyectos',
	            templateUrl: 'pages/_elegirProyectos.html',
	            controller : 'gruposController'
	        })
	        .state('grupo2.archivosProfesor', {
	            url: '/archivos-proyectos',
	            templateUrl: 'pages/_archivosProfesor.html',
	            controller : 'gruposController'
	        })
	        .state('estudiante.estudianteGrupo', {
	            url: '/mi-grupo',
	            templateUrl: 'pages/_miGrupo.html',
	            controller : 'gruposController'
	        })
	        .state('estudiante.estudianteGrupoNotas', {
	            url: '/mis-notas',
	            templateUrl: 'pages/_notaGrupo.html',
	            controller : 'gruposController'
	        })
	        .state('estudiante.estudianteGrupoTareas', {
	            url: '/mis-tareas',
	            templateUrl: 'pages/_tareasEstudiante.html',
	            controller : 'gruposController'
	        })

	        .state('grupo2.notasProfesor', {
	            url: '/AsignarNotas',
	            templateUrl: 'pages/_rubricaEstudiante.html',
	            controller: 'directorController'
	        })

	        
	        
	        
	        
        
     	<!--//fin rutas-->
                
});

})();