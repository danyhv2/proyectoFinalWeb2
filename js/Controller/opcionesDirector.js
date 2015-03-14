(function() {
    var module = angular.module('module', ['ui.router']);

    module.controller('directorController', function($scope) {
        this.datos = archivos;
        var valorActualE = [],
            valorActualC = [],
            valorActualP = [];
        $('.errormsj').hide();
        $('.errormsj2').hide();
        $('.opcionesNota').hide();

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
            $scope.este.datos.Carreras.splice(z, 1);
        }

        $scope.delCurso = function(valores) {
            var l = $scope.estCr.indexOf(valores);
            $scope.estCr.splice(l, 1);
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
            console.log($scope.mCarrera)
            if ($scope.mCarrera === "" || $scope.mCurso ==="" || $scope.mCarrera === undefined || $scope.mCurso === undefined) {
                $('<div class="msgError" aria-hidden="false">Debe seleccionar un valor en ambos campos</div>').insertAfter('#curs').delay(1000).fadeOut();
            }else{

            for (var i = archivos.Carreras.length - 1; i >= 0; i--) {

                if (archivos.Carreras[i].carrera === $scope.mCarrera) {
                    for (var m = valorActualC.length - 1; m >= 0; m--) {
                        archivos.Carreras[i].CursosAsignados.push(valorActualC[m])
                    };
                    $('<p id="msgSuccess" class="alert alert-success">Datos ingresados correctamente.</p>').insertBefore('#formAddR').delay(1000).fadeOut();
                };
            };
            $scope.mCarrera = '';
            $scope.mCurso = '';
            $('#tablaCursos').empty();
            };


        }

        $scope.del = function(grupos) {
            var z = $scope.este.datos.GruposDeCurso.indexOf(grupos);
            $scope.este.datos.GruposDeCurso.splice(z, 1);
        }

        $scope.horChan = function() {
            $scope.par3 = $scope.nuevH
        }

        $scope.editCrus = function(inf) {

            var valorActual = inf;
            $scope.estT = [];
            $scope.proT = [];

            for (var j = 0; j < valorActual.Estudiantes.length; j++) {
                $scope.estT.push(valorActual.Estudiantes[j].NombreEstudiante);
            }

            for (var k = 0; k < valorActual.Profesores.length; k++) {
                $scope.proT.push(valorActual.Profesores[k].NombreProfesor);
            }

            $scope.par1 = valorActual.NombreDelCurso;
            $scope.par2 = valorActual.NombreDelGrupo;
            $scope.par3 = valorActual.Horario;
            $scope.par4 = $scope.proT;
            $scope.par5 = $scope.estT;

        }

          $scope.delTempProf = function(cs) {
            var z = $scope.proT.indexOf(cs);
            $scope.proT.splice(z, 1);
        }

        $scope.delTempEst = function(zc) {
            var z = $scope.estT.indexOf(zc);
            $scope.estT.splice(z, 1);
        }

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
            $('.ProfeTempor').append('<tr><td class="nombrePTemp">' + tempPr.Profesor + '</td><td><select class="form-control">\
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
            var grupoTemp = {
                "NombreDelCurso": $scope.infoIngresada1,
                "NombreDelGrupo": $scope.infoIngresada2,
                "Horario": $scope.infoIngresada3,
                "Estudiantes": valorActualE,
                "Profesores": valorActualP,
            }

            archivos.GruposDeCurso.push(grupoTemp);
            document.getElementById("modalNuevoGru").reset();
            $('#modelCrearGrupoCurso').modal('hide');

            $(".ProfeTempor").empty();
            $(".EstudTempor").empty();
            $scope.infoIngresada3 = "";
            $scope.infoIngresada4 = "";
            $scope.infoIngresada5 = "";
            $('<p id="msgSuccess" class="alert alert-success">Datos ingresados correctamente.</p>').insertBefore('#cajaCursos').delay(1000).fadeOut();
        }

        $scope.resetForm = function() {

            document.getElementById("modalNuevoGru").reset();
            $(".ProfeTempor").empty();
            $(".EstudTempor").empty();
            $scope.infoIngresada3 = "";
            $scope.infoIngresada4 = "";
            $scope.infoIngresada5 = "";
        }

        $scope.borrarRubTemp = function() {
            $('#rubricasModal').empty();
        }

        $scope.edit = function(valores) {
            $scope.cantidadParametros = valores

            $.each($scope.cantidadParametros.rubricaLista, function(key, value) {
                $.each(value, function(key, value) {
                    $('#rubricasModal').append('\
                <div class="group form-group">\
                        <label class="rubricasTemp">' + key + '</label>\
                        <input required class="valoresTemp form-control" name="nombreEditRubrica" value="' + value + '">\
                </div>')


                });
            });

            var t = $scope.este.datos.RubricasCreadas.indexOf(valores);

            $scope.editCreat = function() {

                var rubricasPorReemplazar = [],
                    rubrosPorReemplazar = [],
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


                var cosa = [],
                    RubricaLista = [];

                function pushToAry(name, val) {
                    var vas = {};
                    vas[name] = val
                    cosa.push(vas);
                }

                for (var w = 0; w < s; w++) {
                    var rubr = rubrosPorReemplazar[w],
                        num = rubricasPorReemplazar[w];

                    pushToAry(rubr, num);

                };


                archivos.RubricasCreadas.push({
                    "rubricaLista": cosa
                });

                $scope.este.datos.RubricasCreadas.splice(t, 1);
                $('.errormsj2').hide();
                $('#rubricasModal').empty();
            }
        }

        $scope.delP = function(cs){
            var z = $scope.este.datos.ParamatrosRubrica.indexOf(cs);
            $scope.este.datos.ParamatrosRubrica.splice(z, 1);
        }

        $scope.delR = function(valores) {
            var f = $scope.este.datos.RubricasCreadas.indexOf(valores);
            $scope.este.datos.RubricasCreadas.splice(f, 1);
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
            var rubricasPorEnviar = [],
                rubrosPorEnviar = [],
                y = 0,
                s = 0,
                total = 0;

            $('.valNot').each(function() {
                rubricasPorEnviar.push($(this).val());
                y++
                s++
            });

            $('.rubroP').each(function() {
                rubrosPorEnviar.push($(this).text());
            });

            for (y--; y >= 0; y--) {
                total = total + Number(rubricasPorEnviar[y])
            };

            if (total === 100) {

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

                archivos.RubricasCreadas.push({
                    "rubricaLista": cosa
                });

                $('<p id="msgSuccess" class="alert alert-success">Datos ingresados correctamente.</p>').insertBefore('#formRub').delay(1000).fadeOut();
                document.getElementById("formAddR").reset();
            } else {
                $('<div class="msgError" aria-hidden="false">El total debe ser 100</div>').insertBefore('#formRub').delay(1000).fadeOut();
            }
        }
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
            //templateUrl: 'pages/_rubricaEstudiante.html',
            controller: 'directorController'
        })
    });
})();

var archivos = {
    "RubricasCreadas": [{
        "rubricaLista": [{
            "NombreDeRubrica": "Rubrica 3"
        }, {
            "NombreDeGrupo": "Grupo 3"
        }, {
            "Examen": 60
        }, {
            "Puntualidad": 20
        }, {
            "Concepto": 20
        }]

    }],

    "ParamatrosRubrica": [{
        "parametro": "Parametro prueba"
    }, {
        "parametro": "Parametro prueba 1"
    }],

    "GruposDeCurso": [{
        "NombreDelCurso": "Proyecto Web 1",
        "NombreDelGrupo": "Grupo 1",
        "Horario": "Noche",
        "Estudiantes": [{
            "NombreEstudiante": "Mario Marin",
        }, {
            "NombreEstudiante": "Peter Parker",
        }],

        "Profesores": [{
            "NombreProfesor": "Jose Anruz",
            "Rol asignado": "Proceso"
        }, {
            "NombreProfesor": "Sofia Vega",
            "Rol asignado": "Practica"
        }],
    }, {
        "NombreDelCurso": "Proyecto Web 3",
        "NombreDelGrupo": "Grupo 3",
        "Horario": "Noche",
        "Estudiantes": [{
            "NombreEstudiante": "Frodo Ramirez",

        }, {
            "NombreEstudiante": "Harry Ortiz",

        }],

        "Profesores": [{
            "NombreProfesor": "Israel Martinez",
            "Rol asignado": "Proceso"

        }, {
            "NombreProfesor": "Carlos Villafuerte",
            "Rol asignado": "Factor Humano"
        }],
    }],

    "EstudiantesNormales": [{
        "Estudiante": "Mario Cascante",
    }, {
        "Estudiante": "Mariana Cascante",
    }, {
        "Estudiante": "Helen Post ",
    }, {
        "Estudiante": "Josiah Brandt"
    }],

    "Carreras": [{
        "carrera": "Desarrollo de web",
        "CursosAsignados": [{
            "curso": "Curso de nuevo",
        }, {
            "curso": "Curso de numeros"
        }],

    }, {
        "carrera": "Desarrollo de Software",
        "CursosAsignados": [{
            "curso": "Curso de progra",
        }, {
            "curso": "Curso de y2k38"
        }],

    }, {
        "carrera": "Telematica",
        "CursosAsignados": [{
            "curso": "Curso temporal",
        }],
    }, {
        "carrera": "TIC",
        "CursosAsignados": [{
            "curso": "Curso de estudiantes",
        }],
    }],

    "ProfesoresNormales": [{
        "Profesor": "Jennifer Moralez",
    }, {
        "Profesor": "Henrietta Mundo",
    }, {
        "Profesor": "Alfonso Collins ",
    }, {
        "Profesor": "Robert Smith"
    }]
}