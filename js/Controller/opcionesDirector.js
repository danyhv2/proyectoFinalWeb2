(function() {
    var module = angular.module('module', ['ui.router']);

    module.controller('directorController', function($scope, $http) {
        this.datos = archivos;
        //Tomar estudiantes y nombres

        $scope.NombreProfes = [];
        $scope.NombreEstuds = [];
        $scope.NombreCarrera = [];
        $scope.cursosDB = [];

        this.cursosD = $scope.cursosDB;

        $http.get('php/buscarProfesores.php').success(function(data){
            $scope.NombreProfes1 = data;
            
            for (var i = $scope.NombreProfes1.length - 1; i >= 0; i--) {
                $scope.NombreProfes.push($scope.NombreProfes1[i].nombre +" "+ $scope.NombreProfes1[i].primerApellido + " " + $scope.NombreProfes1[i].segundoApellido);
            };
        })

        $http.get('php/buscarEstudiantesDirector.php').success(function(data){
            $scope.NombreEstuds1 = data;
            for (var i = 0; i < $scope.NombreEstuds1.length; i++) {
                $scope.NombreEstuds.push($scope.NombreEstuds1[i].nombre +" "+ $scope.NombreEstuds1[i].primerApellido + " " + $scope.NombreEstuds1[i].segundoApellido);
            };
        })

        $http.get('php/buscarCursosDirector.php').success(function(data){
            $scope.NombreCarrera1 = data;
            for (var i = $scope.NombreCarrera1.length - 1; i >= 0; i--) {
                $scope.NombreCarrera.push($scope.NombreCarrera1[i].nombre);
                $scope.cursosDB.push({CodCur : $scope.NombreCarrera1[i].id_curso,
                                        Nombre : $scope.NombreCarrera1[i].nombre})
            };
        })

        //Tomar rubricas creadas y actualizar
        $scope.actualizarRubricas = function(){
            archivos.RubricasCreadas = [];
            
            $http.get('php/buscarRubrica.php').success(function(data){
                $scope.rubricasBuscadas = data;

                $http.get('php/buscarRubros.php').success(function(datu){
                    $scope.rubros = datu;

                    $http.get('php/buscarRubricaAsignadaCurso.php').success(function(mal){
                            var curRub = mal;

                        for (var i = $scope.rubricasBuscadas.length - 1; i >= 0; i--) {
    
                            var rubrosDelCurso = [];
                            var cursoAsig = "";
                            var nombr  = $scope.rubricasBuscadas[i].NombreRubrica;

                            for (var oc = curRub.length - 1; oc >= 0; oc--) {
                                if (curRub[oc].rubrica_curso == nombr) {
                                    cursoAsig = curRub[oc].nombre;
                                }
                            };

                            var rubricaTemporal = {
                                "rubricaLista": [{
                                        "NombreDeRubrica": nombr
                                    }, {
                                        "NombreDeGrupo": cursoAsig
                                    }]
                            };
    
            //------    -------------Acomodar el array de rubros--------------//
                            for (var r = $scope.rubros.length - 1; r >= 0; r--) {
    
                                if ($scope.rubricasBuscadas[i].id_rubrica === $scope.rubros[r].id_rubrica) {
    
                                    function pushToMery(name, val) {
                                          var vas = {};
                                          vas[name] = val
                                          rubrosDelCurso.push(vas);
                                      }
                                      pushToMery($scope.rubros[r].nombre, $scope.rubros[r].valor);
                                  };
                              };
    
            //------    -------------Pushear los rubros a el array base------------//
    
                                for (var m = rubrosDelCurso.length - 1; m >= 0; m--) {
                                    rubricaTemporal.rubricaLista.push(rubrosDelCurso[m])
                                };
                                archivos.RubricasCreadas.push(rubricaTemporal)
                        };
                    });

                });

            });

        }

        $scope.agregarProfeEstudSelect = function(){
            archivos.ProfesoresNormales = [];
            archivos.EstudiantesNormales = [];
            archivos.CursosDisponilbes = [];

            for (var i = $scope.NombreProfes.length - 1; i >= 0; i--) {
                archivos.ProfesoresNormales.push({"Profesor" : $scope.NombreProfes[i]})
            };

            for (var i = $scope.NombreEstuds.length - 1; i >= 0; i--) {
                archivos.EstudiantesNormales.push({"Estudiante" : $scope.NombreEstuds[i],
                                                    "Correo" : $scope.NombreEstuds1[i].correo})
            };

            for (var i = $scope.NombreCarrera.length - 1; i >= 0; i--) {
                archivos.CursosDisponilbes.push({"Curso" : $scope.NombreCarrera[i]})
            };

        }

        //Esta funcion borra los grupos locales, jala los que en la bd y los agrega
        $scope.actualizarGrupos = function(){
            var gruposTemporales = [],
                nombreCursoTemporal = [],
                codigoCursoTemporal = [],
                nombreGrupoTemporal = [], 
                estudiantesTemporales = [],
                GrupoActualizableTemporal = {},
                profesoresTemporales = [];

            archivos.GruposDeCurso = [];

            $http.get('php/buscarGruposCurso.php').success(function(data){
                var grup = data;
                for (var i = grup.length - 1; i >= 0; i--) {
                    nombreCursoTemporal.push(grup[i].nombre);
                    codigoCursoTemporal.push(grup[i].id_curso)
                    nombreGrupoTemporal.push(grup[i].NombreDelGrupo);
                };

                $http.get('php/buscarGrupoEstudiantes.php').success(function(dato){
                    var est = dato;
                    for (var i = est.length - 1; i >= 0; i--) {
                        estudiantesTemporales.push({NombreEstudiante : est[i].NombreEstudiante,
                                                    GrupoAsignado : est[i].grupo_asignado,
                                                    correoEs : est[i].correo_estudiante})
                    };
                    //Ayuda

                    $http.get('php/buscarGruposProfesor.php').success(function(date){
                        var tal = date;
                        for (var i = tal.length - 1; i >= 0; i--) {
                        profesoresTemporales.push({NombreProfesor : tal[i].profesor,
                                                    Rol : tal[i].nombre,
                                                    GrupoAsignado : tal[i].grupoAsignado})
                        };
                        //Hasta este punto se jalan todos los valores del grupo
                        //Los inserto al json que uso
                         GrupoActualizableTemporal = {};

                        for (var i = nombreGrupoTemporal.length - 1; i >= 0; i--) {
                            var estudian = [],
                                profest = [];

                            for (var v = profesoresTemporales.length - 1; v >= 0; v--) {
                                if (nombreGrupoTemporal[i] === profesoresTemporales[v].GrupoAsignado) {
                                    profest.push(profesoresTemporales[v])
                                };
                            };

                            for (var c = estudiantesTemporales.length - 1; c >= 0; c--) {
                                if (nombreGrupoTemporal[i] === estudiantesTemporales[c].GrupoAsignado) {
                                    estudian.push(estudiantesTemporales[c])
                                };
                            };

                            GrupoActualizableTemporal = {
                                "NombreDelCurso": nombreCursoTemporal[i],
                                "NombreDelGrupo": nombreGrupoTemporal[i],
                                "codigoCurso" : codigoCursoTemporal[i],
                                "Estudiantes": estudian,
                                "Profesores": profest
                            };
                            archivos.GruposDeCurso.push(GrupoActualizableTemporal)
                        };
                    })
                })
            })

        }

        $scope.refrescarCarreras = function(){
            archivos.Carreras = [];
            $http.get('php/buscarCarreraDirector.php').success(function(date){
                $scope.carreras = date;

                $http.get('php/buscarCarrerasCursosDirector.php').success(function(data){
                    $scope.conten = data;
                    //-------------Asignar y eso-------------//

                    for (var i = $scope.carreras.length - 1; i >= 0; i--) {

                        var carreraTemp = {
                            "carrera": $scope.carreras[i].nombre,
                            "CursosAsignados": [],
                        }

                        for (var j = $scope.conten.length - 1; j >= 0; j--) {
                            if ($scope.conten[j].nombreCarrera == $scope.carreras[i].nombre) {
                                carreraTemp.CursosAsignados.push({"curso" : $scope.conten[j].nombreCurso})
                            };
                        };
                        archivos.Carreras.push(carreraTemp)
                    };

                })

            })
        }

        //tester

        var valorActualE = [],
            valorActualC = [],
            valorActualP = [];

            //rubrica nueva
        $scope.rubricas = [
        {
          rubro: 'Examen I',
          valor: 30
        },
        { 
          rubro: 'Examen II',
          valor: 30
        },
        { 
          rubro: 'Puntualidad',
          valor: 10
        },
        { 
          rubro: 'Tareas',
          valor: 10
        },
        { 
          rubro: 'Proyecto Final',
          valor: 20
        }
      ];
        $('.errormsj').hide();
        $('.errormsj2').hide();
        $('.opcionesNota').hide();
        $('#modalExitoDelGrupo').hide();
        $('#modalExitoDeRubrica').hide();
        $('#modalExitoDeCarrera').hide();
        //Parte de roy

        $scope.editNotas = function(valores) {

                //var t = $scope.este.datos.GruposDeCurso.indexOf(valores);
                //$scope.estNotas = [];
                $('.opcionesNota').hide();
                $('#notasVista').empty();
                $('#notasCrea').empty();
                $scope.grupoTemporalSelecte = valores;
                var valorActual = valores;
                for (var j = 0; j < archivos.RubricasCreadas.length; j++) {
                    if (archivos.RubricasCreadas[j].rubricaLista[1].NombreDeGrupo === valorActual.NombreDelGrupo) {

                        var RubActual = archivos.RubricasCreadas[j];

                        $.each(RubActual.rubricaLista, function(key, value) {

                            $.each(value, function(key, value) {

                                $('#notasVista').append('\
                                <div class="group valorMs form-group">\
                                        <label class="rubricasTemp">' + key + '</label>\
                                        <input disabled class="valoresTemp form-control" name="nombreEditRubrica" value="' + value + '">\
                                </div>')


                            });
                        });
                        var counter = 0;
                        $('.valorEd').each(function() {
                            counter++
                        })
                        $.each(RubActual.rubricaLista, function(key, value) {

                            $.each(value, function(key, value) {

                                $('#notasCrea').append('\
                                <div class="group valorEd form-group">\
                                        <label class="rubricasTemp">' + key + '</label>\
                                        <input required class="valoresTemp form-control" name="nombreEditRubrica" value="' + value + '">\
                                </div>')


                            });
                        });

                        $("#notasCrea div:first-child input").attr('disabled', 'disabled');
                        $("#notasCrea div:eq(1) input").attr('disabled', 'disabled');

                        $scope.valuesPred = $('.valorEd input').map(function() {
                            return this.value;
                        }).get();

                        $('.opcionesNota').show();
                    };
                }
                $scope.addNota = function() {

                    var notasPuestas = [],
                        notasPredef = [],
                        concordancia = 0;

                    $scope.values = $('.valorEd input').map(function() {
                        return this.value;
                    }).get();

                    var sx = 0;

                    $.each(RubActual.rubricaLista, function() {
                        sx++
                    });
                    for (var i = 0; i <= sx; i++) {
                        var j = i + 2;

                        notasPuestas.push($scope.values[j])
                        notasPredef.push($scope.valuesPred[j])
                    };

                    notasPuestas = $.grep(notasPuestas, function(n) {
                        return (n)
                    });
                    notasPredef = $.grep(notasPredef, function(n) {
                        return (n)
                    });

                
                    for (var c = 0; c <= notasPuestas.length - 1; c++) {
                        var numeroPuest = Number(notasPuestas[c])
                        var numeroPred = Number(notasPredef[c])

                        if (numeroPuest <= numeroPred) {
                            concordancia++;
                        } else {
                            concordancia--;
                        }
                    };

                    if (concordancia === notasPuestas.length) {
                        $('<p id="msgSuccess" class="alert alert-success">Datos ingresados correctamente.</p>').insertBefore('#formAddN').delay(1000).fadeOut();
                    } else {
                        $('<div class="msgError" aria-hidden="false">Los valores no pueden ser mayores a los de la rubrica</div>').insertBefore('#formAddN').delay(1000).fadeOut();
                    };

                }
            }
            //Parte de roy

        $scope.delc = function(cs) {
            var z = $scope.este.datos.Carreras.indexOf(cs);
            $scope.delca = function(){
                $scope.este.datos.Carreras.splice(z, 1);
            }
            
        }

        $scope.delCurso = function(valores) {
            var l = $scope.estCr.indexOf(valores);
            $scope.estCr.splice(l, 1);
            $('<p id="msgSuccess" class="alert alert-success">El curso de elimino correctamente</p>').insertBefore('#myModalLabel').delay(500).fadeOut();
        }

        $scope.editCrusgru = function(valores) {
            var t = $scope.este.datos.Carreras.indexOf(valores);
            $scope.estCr = [];
            var valorActual = valores;

            $scope.valor0 = valorActual.carrera;

            for (var j = 0; j < valorActual.CursosAsignados.length; j++) {
                $scope.estCr.push({
                    apj: valorActual.CursosAsignados[j].curso
                });

            }
        }

        $scope.CursAdd = function() {
            var tempcr = $scope.mCurso;
            var cAdd = '';

            $('.CurTempor').append('<tr><td class="CurTemp">' + tempcr + '</td></tr>')

            cAdd = tempcr;

            valorActualC.push({
                "curso": cAdd,
            })
        }

        $scope.addCurso = function() {
            if ($scope.mCarrera === "" || $scope.mCurso ==="" || $scope.mCarrera === undefined || $scope.mCurso === undefined) {
                $('<div class="msgError" aria-hidden="false">Debe seleccionar un valor en ambos campos</div>').insertAfter('#curs').delay(1000).fadeOut();
            }else{
                var carreraSeleccionada = $scope.mCarrera;
                $scope.cursosAdd = [];
                $http.get('php/buscarCursosDirector.php').success(function(data){
                    $scope.care = data;
                    for (var i = $scope.NombreCarrera1.length - 1; i >= 0; i--) {
                        $scope.cursosAdd.push({CodCur : $scope.care[i].id_curso,
                                                Nombre : $scope.care[i].nombre})
                    };

                    $http.get('php/buscarCarreraDirector.php').success(function(date){
                        $scope.temCarreras = date;
                        var idCarrera = 0;

                        for (var te = $scope.temCarreras.length - 1; te >= 0; te--) {

                            if ($scope.temCarreras[te].nombre === carreraSeleccionada) {
                                idCarrera = $scope.temCarreras[te].id_carrera
                            };


                        };


                        for (var j = valorActualC.length - 1; j >= 0; j--) {

                            for (var u = $scope.cursosAdd.length - 1; u >= 0; u--) {

                                if (valorActualC[j].curso === $scope.cursosAdd[u].Nombre) {

                        $http.post('php/agregarCursoCarreraDirector.php', { 'Carrera' : idCarrera, 'Curso' : $scope.cursosAdd[u].CodCur}).
                          success(function(dataGrupo, status) {
                        });
                                };
                                
                            };
                            
                        };
                        valorActualC = [];
                    })
                })
                $scope.ocl = true;

                $scope.aggrCurCr = function(){

                    $scope.refrescarCarreras();
                    $('#modalExitoDeCarrera').fadeIn(1000);
                    $('#modalExitoDeCarrera').fadeOut(1000);
                    $scope.mCarrera = '';
                    $scope.mCurso = '';
                    $('#tablaCursos').empty();
                    $('#closeCarrera').click();
                    $scope.ocl = false;
                }

                var myVar = setTimeout($scope.aggrCurCr, 2000);
            };


        }

        $scope.del = function(grupos) {
            var z = grupos.NombreDelGrupo;
            $scope.ocultarBotonProceder = false;
            $scope.delet = function(){

        //-----------------------PHP Borrar----------------------
            $http.post('php/borrarGrupoDirector.php', { 'nombreGruZ' : z}).
              success(function(dataGrupo, status) {
            });

            $http.post('php/borrarGrupoEstudiantesDirector.php', { 'nombreGruEz' : z}).
              success(function(dataGrupo, status) {
            });

            $http.post('php/borrarGrupoProfesoresDirector.php', { 'nombreGruPrZ' : z}).
              success(function(dataGrupo, status) {
            });
        //-----------------------PHP Borrar----------------------

                $scope.borrarGrup = function(){
                    $scope.actualizarGrupos();
                    $('#closeConfirmDel').click();
                }

                $scope.ocultarBotonProceder = true;

                var myVar = setTimeout($scope.borrarGrup, 2000);
            }
        }

        $scope.horChan = function() {
            $scope.par3 = $scope.nuevH
        }

        $scope.editCrus = function(inf) {

            var valorActual = inf;
            $scope.estT = [];
            $scope.proT = [];

            for (var j = 0; j < valorActual.Estudiantes.length; j++) {
                $scope.estT.push({nombre : valorActual.Estudiantes[j].NombreEstudiante,
                                  grupo : valorActual.Estudiantes[j].GrupoAsignado,
                                  correoEss : valorActual.Estudiantes[j].correoEs});
            }

            for (var k = 0; k < valorActual.Profesores.length; k++) {
                $scope.proT.push({nombre : valorActual.Profesores[k].NombreProfesor,
                                  rol : valorActual.Profesores[k].Rol,
                                  grupo : valorActual.Profesores[k].GrupoAsignado});
            }
            $scope.par1 = valorActual.NombreDelCurso;
            $scope.par2 = valorActual.NombreDelGrupo;
            $scope.par4 = $scope.proT;
            $scope.par5 = $scope.estT;
        }

//---------------------Funcion que borra el profe de la bd-------------------//
          $scope.delTempProf = function(cs) {
            $http.post('php/editar_borrarProfesorGrupo.php', { 'GrupoPfr' : cs.grupo, 'nombrePrf': cs.nombre}).
              success(function(dataGrupo, status) {
            })

            var z = $scope.proT.indexOf(cs);
            $scope.proT.splice(z, 1);

            $('<p id="msgSuccess" class="alert alert-success">El profesor se elimino correctamente</p>').insertBefore('#tablaProfes').delay(500).fadeOut();
        }
//---------------------Funcion que borra el profe de la bd-------------------//

//---------------------Funcion que borra el estudiante de la bd--------------//

        $scope.delTempEst = function(zc) {
            $http.post('php/editar_borrarEstudianteGrupo.php', { 'GrupoExt' : zc.grupo, 'correoExt': zc.correoEss}).
              success(function(dataGrupo, status) {
            })
            var z = $scope.estT.indexOf(zc);
            $scope.estT.splice(z, 1);
            $('<p id="msgSuccess" class="alert alert-success">El estudiante se elimino correctamente</p>').insertBefore('#tablaEstud').delay(500).fadeOut();
        }
//---------------------Funcion que borra el estudiante de la bd--------------//


        $scope.estudAdd = function() {
            var tempEs = $scope.infoIngresada4;
            var eAdd = '';

            $('.EstudTempor').append('<tr><td class="nombreETemp">' + tempEs.Estudiante + '</td></tr>')

            eAdd = tempEs.Estudiante;

            valorActualE.push({
                "NombreEstudiante": eAdd,
            })
        }

        $scope.profAdd = function() {
            var tempPr = $scope.infoIngresada5;
            var pAdd = '';
            $('.ProfeTempor').append('<tr><td class="nombrePTemp">' + tempPr.Profesor + '</td><td><select class="form-control rolProfesorGrup">\
                    <option>Proceso</option>\
                    <option>Practica</option>\
                    <option>Factor Humano</option>\
                </select></td></tr>')

            pAdd = tempPr.Profesor;

            valorActualP.push({
                "NombreProfesor": pAdd,
            })
        }

        $scope.guarNuevGr = function() {
            var count = 0;
            if ($scope.infoIngresada1 === "" || $scope.infoIngresada1 === undefined){
                count ++
                $('<div class="msgError" aria-hidden="false">Debe llenar este campo</div>').insertBefore('#Nam').delay(1000).fadeOut();
            };

            if ($scope.infoIngresada2 === "" || $scope.infoIngresada2 === undefined){
                count ++
                $('<div class="msgError" aria-hidden="false">Debe llenar este campo</div>').insertBefore('#Nam1').delay(1000).fadeOut();
            };

            if ($scope.infoIngresada4 === "" || $scope.infoIngresada4 === undefined){
                count ++
                $('<div class="msgError" aria-hidden="false">Debe llenar este campo</div>').insertBefore('#Nam3').delay(1000).fadeOut();
            };

            if ($scope.infoIngresada5 === "" || $scope.infoIngresada5 === undefined){
                count ++
                $('<div class="msgError" aria-hidden="false">Debe llenar este campo</div>').insertBefore('#Nam4').delay(1000).fadeOut();
            };


            if (count === 0) {

            var codCurz = 0;

            for (var l = $scope.cursosDB.length - 1; l >= 0; l--) {
                if ($scope.cursosDB[l].Nombre === $scope.infoIngresada1) {
                    codCurz = $scope.cursosDB[l].CodCur;
                };
            };

            var grupoTemp = {
                "NombreDelCurso": $scope.infoIngresada1,
                "NombreDelGrupo": $scope.infoIngresada2,
                "codigoCurso" : codCurz,
                "Estudiantes": valorActualE,
                "Profesores": valorActualP,
            }

            $http.get('php/buscarGruposCurso.php').success(function(data){
                var grup = data;
                var ErrorNombre = 0;

                for (var nm = grup.length - 1; nm >= 0; nm--) {
                   if (grup[nm].NombreDelGrupo == $scope.infoIngresada2) {
                        ErrorNombre++;
                    }
                };

                if (ErrorNombre === 0) {

            //Metodo para agregar grupo
// -----------------------PHP --------------------
            $http.post('php/agregarGrupoCurso.php', { 'IdC' : codCurz, 'nombreG': $scope.infoIngresada2}).
              success(function(dataGrupo, status) {
            })

            //Metodo agregar estudiant
            //-------------Buscar el correo del estudiante para agregarlo a la bd-------------------
            var arregloTemporalCorreos = [];
            for (var i = valorActualE.length - 1; i >= 0; i--) {
                //Buscar el correo que pertenece al estudiante
                for (var mt = archivos.EstudiantesNormales.length -1; mt >= 0; mt--) {
                    if (valorActualE[i].NombreEstudiante == archivos.EstudiantesNormales[mt].Estudiante) {
                        arregloTemporalCorreos.unshift(archivos.EstudiantesNormales[mt].Correo)
                    };

                };
            };
            for (var g = valorActualE.length - 1; g >= 0; g--) {
                 $http.post('php/agregarEstudiantesGrupodirector.php', {'IdCurso' : codCurz, 'correoEst' : arregloTemporalCorreos[g], 'GrupoEnt': $scope.infoIngresada2}).
                 success(function(dataGrupo, status) {

                 })
            };

            //Metodo para agregar profesores

            var pan = [];
            $(".rolProfesorGrup").each(function() {
                pan.push($(this).val());
            });

            for (var u = valorActualP.length - 1; u >= 0; u--) {
                $http.post('php/agregarProfesoresGrupodirector.php', {'RolProf': pan[u], 'nombreProf' : valorActualP[u].NombreProfesor, 'GrupoAsig': $scope.infoIngresada2}).
                success(function(dataGrupo, status) {
                })
            };

            $scope.ocultarBotonGuardar = true;
            $scope.aggrGrup = function(){
                    $scope.actualizarGrupos();
                    document.getElementById("modalNuevoGru").reset();
                    $('#modelCrearGrupoCurso').modal('hide');

                    $(".ProfeTempor").empty();
                    $(".EstudTempor").empty();
                    $scope.infoIngresada4 = "";
                    $scope.infoIngresada5 = "";
                    $('#modalExitoDelGrupo').fadeIn(1500);
                    $('#modalExitoDelGrupo').fadeOut(1500);
                    $scope.ocultarBotonGuardar = false;
                    valorActualE = [],
                    valorActualC = [],
                    valorActualP = [];
                }

            var myVar = setTimeout($scope.aggrGrup, 2000);
//----------------------PHP--------------------
            archivos.GruposDeCurso.push(grupoTemp);
            }else{
                $('<div class="msgError" aria-hidden="false">Este nombre ya existe</div>').insertBefore('#Nam1').delay(1000).fadeOut();
            };
            })  
            };
        }

        $scope.resetForm = function() {

            document.getElementById("modalNuevoGru").reset();
            $(".ProfeTempor").empty();
            $(".EstudTempor").empty();
            $scope.infoIngresada4 = "";
            $scope.infoIngresada5 = "";
        }

        $scope.borrarRubTemp = function() {
            $('#rubricasModal').empty();
        }

        $scope.resetFormRubric = function() {
            
            $scope.newNombreRubrica = "";
            $scope.newNombreGrupo = "";
            $(".valNotPunto").val("")
        }

        $scope.resetFormCg = function() {
            $scope.mCarrera = '';
            $scope.mCurso = '';
            $('#tablaCursos').empty();
        }

        $scope.edit = function(valores) {
            $scope.cantidadParametros = valores
            
            $.each($scope.cantidadParametros.rubricaLista, function(key, value) {
                $.each(value, function(key, value) {
                    $('#rubricasModal').append('\
                <div class="group">\
      <input type="text" class="valoresTemp" value='+ value +'>\
      <span class="highlight"></span>\
      <span class="bar"></span>\
      <label class="rubricasTemp">'+ key +'</label>\
    </div>')
                });
            });

            var nombrer = $("#rubricasModal div:first-child input").val();
            var nombreg = $("#rubricasModal div:eq(1) input").val();

            $("#rubricasModal div:first-child ").hide();
            $("#rubricasModal div:eq(1) ").hide();

            $('#rubricasModal').prepend('\
    <table class="table">\
      <th>Nombre del curso</th>\
      <tr>\
         <td>'+nombreg+'</td>\
      </tr>\
   </table>')

            $('#rubricasModal').prepend('\
    <table class="table">\
      <th>Nombre de la rubrica</th>\
      <tr><td>'+nombrer+'</td></tr>\
   </table>')

            $("#NombreGr").val(nombreg);
            $("#NombreRu").val(nombrer);

            var t = $scope.este.datos.RubricasCreadas.indexOf(valores);

            $scope.editCreat = function() {

                var rubricasPorReemplazar = [],
                    rubrosPorReemplazar = [],
                    validacion = [],
                    numeroPuest = 0,
                    y = 0,
                    s = 0,
                    total = 0;

                $('.valoresTemp').each(function() {
                    rubricasPorReemplazar.push($(this).val());
                    y++
                    s++
                });

                $('.rubricasTemp').each(function() {
                    rubrosPorReemplazar.push($(this).text());
                });

                for (var i = 0; i <= rubricasPorReemplazar.length; i++) {
                    var k = i + 2;
                    validacion.push(rubricasPorReemplazar[k])
                };

                validacion = $.grep(validacion, function(n) {
                    return (n)
                });
                //This is magic from some link in stackoverflow


                for (var g = 0; g <= validacion.length - 1; g++) {
                    numeroPuest = numeroPuest + Number(validacion[g])
                };

                if (numeroPuest === 100) {
                    var cosa = [];

                    function pushToAry(name, val) {
                        var vas = {};
                        vas[name] = val
                        cosa.push(vas);
                    }

                       
                        $http.get('php/buscarRubricaDirector.php').success(function(das){
                             $scope.rubEdit = das;
        
                             for (var y = $scope.rubEdit.length - 1; y >= 0; y--) {
                                 if ($scope.rubEdit[y].nombre === nombrer) {
                                     $scope.EditCursoId = $scope.rubEdit[y].id_rubrica
                                 };
                             };

                             for (var w = 0; w < s; w++) {
                                var rubr = rubrosPorReemplazar[w],
                                    num = rubricasPorReemplazar[w];
        
                                   pushToAry(rubr, num);

                                    $http.post('php/editar_cambiarRubroRubrica.php', { 'valRub' : num, 'nomRub': rubr, 'RubrNon': $scope.EditCursoId}).
                                    success(function(dataGrupo, status) {
                                    })
                             };
                         })    
                       
                    $scope.estirub = function(){
                        $scope.actualizarRubricas();
                        $('#modelDetallesRubrica').modal('hide');
                        $scope.btnEditRub = false;
                        $('.errormsj2').hide();
                        $('#rubricasModal').empty();
                        $('<p id="msgSuccess" class="alert alert-success">Datos guardados correctamente.</p>').insertBefore('#tutuloRubri').delay(1000).fadeOut();
 
                    }

                    $scope.btnEditRub = true;

                    var myVar = setTimeout($scope.estirub, 2000);

                }else{
                    $('.errormsj2').hide();
                    $('#rubricasModal').empty();
                    $('<div class="msgError" aria-hidden="false">El valores deben sumar 100</div>').insertBefore('#tutuloRubri').delay(1000).fadeOut();
                }
            }
        }

        $scope.delP = function(cs){
            var z = $scope.este.datos.ParamatrosRubrica.indexOf(cs);
            $scope.este.datos.ParamatrosRubrica.splice(z, 1);
        }

        $scope.delR = function(valores) {
            var f = $scope.este.datos.RubricasCreadas.indexOf(valores);
            $scope.delRubbr = function(){

                //----------------PHP Borrar rubrica-----------//
                $http.post('php/borrarRubricaDirector.php', { 'rubNomb' : valores.rubricaLista[0].NombreDeRubrica}).
                success(function(dataGrupo, status) {
                })

                $http.get('php/buscarRubrica.php').success(function(data){
                    var id = data;
                    for (var i = id.length - 1; i >= 0; i--) {
                        if (id[i].NombreRubrica === valores.rubricaLista[0].NombreDeRubrica){
                            var parIdRub = id[i].id_rubrica

                            $http.post('php/borrarRubrosRubrica.php', { 'idRub' : parIdRub}).
                            success(function(dataGrupo, status) {
                            })
                        };
                    };
                })

                $http.post('php/borrarRubricaCursoDirector.php', { 'nosis' : valores.rubricaLista[0].NombreDeRubrica}).
                success(function(dataGrupo, status) {
                })

                //-------------------PHP BorrarRubrica------------//

                $scope.este.datos.RubricasCreadas.splice(f, 1);    
            }
        }

        $scope.nuevoRubroAdd = function() {

            if ($scope.nuevoRubro === "" || $scope.nuevoRubro === undefined) {
                $('<div class="msgError" aria-hidden="false">Debe llenar el campo</div>').insertBefore('#nuevRub').delay(1000).fadeOut();
            } else {
                archivos.ParamatrosRubrica.push({
                    parametro: $scope.nuevoRubro
                })
                $scope.nuevoRubro = "";
                $('<span class="bg-success text-success errorMsj">Se agrego con exito</span>').insertBefore('#nuevRub').delay(1000).fadeOut();
            };
        }

        $scope.add = function() {
            var cont = 0;
            if ($scope.newNombreRubrica === "" || $scope.newNombreRubrica === undefined) {
                cont ++
                $('<div class="msgError" aria-hidden="false">Debe llenar este campo</div>').insertBefore('#nombRrb').delay(1000).fadeOut();
            };

            if ($scope.newNombreGrupo === "" || $scope.newNombreGrupo === undefined) {
                cont ++
                $('<div class="msgError" aria-hidden="false">Debe llenar este campo</div>').insertBefore('#nombgrr').delay(1000).fadeOut();
            };

            if (cont === 0){
            
            var rubricasPorEnviar = [],
                rubrosPorEnviar = [],
                y = 0,
                s = 0,
                f = 0,
                total = 0,
                mobile = false;

                $('.valNotPunto').each(function() {
                    rubricasPorEnviar.push($(this).val());
                    y++
                    s++
                    f++
                });

                $('.rubroPuntoTemporal').each(function() {
                    rubrosPorEnviar.push($(this).text());
                });
                
            for (y--; y >= 0; y--) {
                total = total + Number(rubricasPorEnviar[y])
            };

            if (total === 100) {

                $http.get('php/buscarRubrica.php').success(function(data){
                    var testNombre = data;
                    var errorNomb = 0;

                    for (var zx = testNombre.length - 1; zx >= 0; zx--) {
                        if (testNombre[zx].NombreRubrica == $scope.newNombreRubrica) {
                            errorNomb++;
                        };
                    };

                    if (errorNomb === 0) {

                        s = s/2;
                        f = f/2;
        
                        var cosa = [],
                            RubricaLista = [];
        
                        function pushToAry(name, val) {
                            var vas = {};
                            vas[name] = val
                            cosa.push(vas);
                        }
        
                        pushToAry('NombreDeRubrica', $scope.newNombreRubrica);
                        pushToAry('NombreDeGrupo', $scope.newNombreGrupo);
        
                        for (s--; s >= 0; s--) {
                            var rubr = rubrosPorEnviar[s],
                                num = rubricasPorEnviar[s];
        
                            pushToAry(rubr, num);
                        };
        
    //----------        ----PHP AGREGAR RUBRICAS---------------//
                        $http.post('php/agregarRubricaDirector.php', { 'nombreRub' : $scope.newNombreRubrica}).
                          success(function(dataGrupo, status) {
        
                            $http.post('php/buscarCurso.php', { 'data' : $scope.newNombreGrupo}).
                                success(function(dass, status) {
        
                                $http.post('php/agregarRubricaCursoDirector.php', { 'nRub' : $scope.newNombreRubrica, 'CuNob' : $scope.newNombreGrupo}).
                                    success(function(da, status) {
                                });
                            });
        
                            $http.get('php/buscarRubricaDirector.php').success(function(das){
                                $scope.rubricasID = das;
        
                                for (var g = $scope.rubricasID.length - 1; g >= 0; g--) {
                                    if ($scope.rubricasID[g].nombre === $scope.newNombreRubrica) {
                                        $scope.idCursoTem = $scope.rubricasID[g].id_rubrica
                                    };
                                };
        
                                for (f--; f >= 0; f--) {
                                    var rubr = rubrosPorEnviar[f],
                                    num = rubricasPorEnviar[f];
        
                                    $http.post('php/agregarRubrosDirector.php', { 'nomb' : rubr, 'valr': num, 'rubNomb': $scope.idCursoTem}).
                                      success(function(dataGrupo, status) {
                                    })
                                };
                            });
                        })

                    $scope.ocultarAdd = true;

                    $scope.aggrRubr = function(){

                        $scope.actualizarRubricas();
        
                        $('#modalExitoDeRubrica').fadeIn(1000);
                        $('#modalExitoDeRubrica').fadeOut(1000);
                        document.getElementById("formAddR").reset();
                        $('#selectGrupo').val(' ');
                        $('#closeRubrica').click();
                        $scope.ocultarAdd = false;
                    }

                    var myVar = setTimeout($scope.aggrRubr, 2000);

                    }else{
                         $('<div class="msgError" aria-hidden="false">Este nombre ya existe</div>').insertBefore('#formRub').delay(1000).fadeOut();
                    };

                });   

            } else {
                $('<div class="msgError" aria-hidden="false">El total debe ser 100</div>').insertBefore('#formRub').delay(1000).fadeOut();
            }
        }
        };
    });

    module.config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('grupo.grupoCursos', {
            url: '/cursos',
            templateUrl: 'pages/_grupoCursoDirector.html'
        })

        .state('grupo.nuevaRubrica', {
            url: '/rubrica',
            templateUrl: 'pages/_nuevaRubricaDirector.html',
            controller: 'directorController'
        })

        .state('grupo.cursosCarreras', {
            url: '/carreras',
            templateUrl: 'pages/_cursosCarrerasDirector.html',
            controller: 'directorController'
        })
    });
})();

var archivos = {
    "RubricasCreadas": [],

    "ParamatrosRubrica": [{
        "parametro": "Valor prueba"
    }, {
        "parametro": "Valor prueba 1"
    }],

    "GruposDeCurso": [],

    "EstudiantesNormales": [],

    "CursosDisponilbes": [],

    "Carreras": [],

    "ProfesoresNormales": []
}


//For the brave souls who get this far: You are the chosen ones,
//the valiant knights of programming who toil away, without rest,
//fixing our most awful code. To you, true saviors, kings of men,
//I say this: never gonna give you up, never gonna let you down,
//never gonna run around and desert you. Never gonna make you cry,
//never gonna say goodbye. Never gonna tell a lie and hurt you.


//Borre el index de no repetirse en area_profe y quite la relacion
//Agrege primery key auntoincremental al id de rubrica cursos