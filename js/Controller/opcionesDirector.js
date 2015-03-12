(function() {
    var module = angular.module('module', ['ui.router']);

    module.controller('directorController', function($scope) { 
        this.datos = archivos;
        var valorActualE = [],
            valorActualC = [],
            valorActualP = [];
        $('.errormsj').hide();
        $('.errormsj2').hide();

        //Parte de roy

        $scope.editNotas = function(valores){
            var t = $scope.este.datos.GruposDeCurso.indexOf(valores);
            $scope.estNotas = [];
            var valorActual = valores;
            for(var j=0; j< archivos.RubricasCreadas.length;j++){
                 if (archivos.RubricasCreadas[j].NombreDeGrupo === valorActual.NombreDelGrupo) {
                    $scope.RubActual = archivos.RubricasCreadas[j];
                 };
            }
            $scope.nota1 = $scope.RubActual.Asistencia;
            $scope.nota2 = $scope.RubActual.Concepto;
            $scope.nota3 = $scope.RubActual.Examen1;
            $scope.nota4 = $scope.RubActual.Examen2;
            $scope.nota5 = $scope.RubActual.Tareas;
        }



        //Parte de roy

        $scope.delc = function(cs){
            var z = $scope.este.datos.Carreras.indexOf(cs);
            $scope.este.datos.Carreras.splice(z, 1);
        }

        $scope.editCrusgru = function(valores){
            var t = $scope.este.datos.Carreras.indexOf(valores);
            $scope.estCr = [];
            var valorActual = valores;

            $scope.valor0 = valorActual.carrera;

            for(var j=0; j< valorActual.CursosAsignados.length;j++){
                $scope.estCr.push({apj:valorActual.CursosAsignados[j].curso});
            }
        }

        $scope.CursAdd = function(){
            var tempcr = $scope.mCurso;
            var cAdd = '';

            $('.CurTempor').append('<tr><td class="CurTemp">'+tempcr+'</td></tr>')

            cAdd = tempcr;

            valorActualC.push({
            "curso" : cAdd,
             })
        }

        $scope.addCurso = function(){
            
            for (var i = archivos.Carreras.length - 1; i >= 0; i--) {
                   
                   if (archivos.Carreras[i].carrera === $scope.mCarrera) {
                    for (var m = valorActualC.length - 1; m >= 0; m--) {
                        archivos.Carreras[i].CursosAsignados.push(valorActualC[m])
                    };
                   };
               };   
               $scope.mCarrera = '';
               $scope.mCurso = '';
               $('#tablaCursos').empty();

        }

        $scope.del = function(grupos){
            var z = $scope.este.datos.GruposDeCurso.indexOf(grupos);
            $scope.este.datos.GruposDeCurso.splice(z, 1);
        }

        $scope.horChan = function(){
          $scope.par3 = $scope.nuevH
        }

        $scope.editCrus = function(inf) {

           var valorActual = inf;
           $scope.estT = [];
           $scope.proT = [];

           for(var j=0; j< valorActual.Estudiantes.length;j++){
                $scope.estT.push(valorActual.Estudiantes[j].NombreEstudiante);
            }

            for(var k=0; k< valorActual.Profesores.length;k++){
                $scope.proT.push(valorActual.Profesores[k].NombreProfesor);
            }

            console.log($scope.proT)
            $scope.par1 = valorActual.NombreDelCurso;
            $scope.par2 = valorActual.NombreDelGrupo;
            $scope.par3 = valorActual.Horario;
            $scope.par4 = $scope.proT;
            $scope.par5 = $scope.estT;

        }

        $scope.estudAdd = function(){
            var tempEs = $scope.infoIngresada4;
            var eAdd = '';

            $('.EstudTempor').append('<tr><td class="nombreETemp">'+tempEs.Estudiante+'</td></tr>')

            eAdd = tempEs.Estudiante;

            valorActualE.push({
            "NombreEstudiante" : eAdd,
             })
        }

        $scope.profAdd = function(){
            var tempPr = $scope.infoIngresada5;
            var pAdd = '';
            $('.ProfeTempor').append('<tr><td class="nombrePTemp">'+tempPr.Profesor+'</td></tr>')
             
              pAdd = tempPr.Profesor;
        
                  valorActualP.push({
                  "NombreProfesor" : pAdd,
                 })

              }

        $scope.guarNuevGr = function(){
            var grupoTemp = {
                "NombreDelCurso": $scope.infoIngresada1,
                "NombreDelGrupo": $scope.infoIngresada2,
                "Horario": $scope.infoIngresada3,
                "Estudiantes": valorActualE,
                "Profesores": valorActualP,
            }

            archivos.GruposDeCurso.push(grupoTemp);
            document.getElementById("modalNuevoGru").reset();

            $(".ProfeTempor").empty();
            $(".EstudTempor").empty();
            $scope.infoIngresada3 = "";
            $scope.infoIngresada4 = "";
            $scope.infoIngresada5 = "";
        }

        $scope.resetForm = function(){
            
            document.getElementById("modalNuevoGru").reset();
            $(".ProfeTempor").empty();
            $(".EstudTempor").empty();
            $scope.infoIngresada3 = "";
            $scope.infoIngresada4 = "";
            $scope.infoIngresada5 = "";
        }

        $scope.borrarRubTemp = function(){
            $('#rubricasModal').empty();
        }

        $scope.edit = function(valores) {
            $scope.cantidadParametros = valores

             $.each($scope.cantidadParametros.rubricaLista, function(key, value){
                $.each(value, function(key, value){
                $('#rubricasModal').append('\
                <div class="group form-group">\
                        <label class="rubricasTemp">'+key+'</label>\
                        <input required class="valoresTemp form-control" name="nombreEditRubrica" value="'+value+'">\
                </div>')

                });
            });
             console.log(archivos.RubricasCreadas.rubricaLista)
            var t = $scope.este.datos.RubricasCreadas.indexOf(valores);

            $scope.editCreat = function() {

           var rubricasPorReemplazar = [],
                rubrosPorReemplazar = [],
                y = 0,
                s = 0,
                total = 0;

            $('.valoresTemp').each(function(){
                rubricasPorReemplazar.push($(this).val());
                y ++
                s ++
            });

            $('.rubricasTemp').each(function(){
                rubrosPorReemplazar.push($(this).text());
            });


                var cosa = [],
                    RubricaLista = [];

                function pushToAry(name, val) {
                var vas = {};
                   vas[name] = val
                   cosa.push(vas);
                }

               for (var w = 0;w < s; w++) {
                var rubr = rubrosPorReemplazar[w],
                    num = rubricasPorReemplazar[w];

                pushToAry(rubr, num);

                };

                console.log(cosa)
                console.log(archivos.RubricasCreadas)

                archivos.RubricasCreadas.push({"rubricaLista":cosa});

                $scope.este.datos.RubricasCreadas.splice(t, 1);
                $('.errormsj2').hide();
                $('#rubricasModal').empty();

        }
    }

        $scope.delR = function(valores) {
            var f = $scope.este.datos.RubricasCreadas.indexOf(valores);
            $scope.este.datos.RubricasCreadas.splice(f, 1);
        }

        $scope.nuevoRubroAdd = function(){
            archivos.ParamatrosRubrica.push({parametro : $scope.nuevoRubro})
            $scope.nuevoRubro = "";
        }

        $scope.add = function() {
            var rubricasPorEnviar = [],
                rubrosPorEnviar = [],
                y = 0,
                s = 0,
                total = 0;

            $('.valNot').each(function(){
                rubricasPorEnviar.push($(this).val());
                y ++
                s ++
            });

            $('.rubroP').each(function(){
                rubrosPorEnviar.push($(this).text());
            });

            for (y --;y >= 0; y--) {
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

               for (s --;s >= 0; s--) {
                var rubr = rubrosPorEnviar[s],
                    num = rubricasPorEnviar[s];

                pushToAry(rubr, num);

                };

                archivos.RubricasCreadas.push({"rubricaLista":cosa});

                document.getElementById("formAddR").reset();
                $('.errormsj').hide();
            }else{
                    $('.errormsj').show();
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
        rubricaLista : [{
        NombreDeRubrica: "Rubrica 1"    
        },
        {Examen: 10},
        {Concepto: 20}]
    }],

    "ParamatrosRubrica": [{
        "parametro": "Asistencia"
    }, {
        "parametro": "Concepto"
    }, {
        "parametro": "Examen"
    }],

    "GruposDeCurso": [{
        "NombreDelCurso": "Proyecto Web 1",
        "NombreDelGrupo": "Grupo 1",
        "Horario": "Noche",
        "Estudiantes": [{
            "NombreEstudiante" : "Frodo",
        },{
            "NombreEstudiante" : "Harry",
        }],

        "Profesores": [{
            "NombreProfesor" : "Israel",
            "Rol asignado" : "Proceso"
        },{
            "NombreProfesor" : "Carlos",
        }],
    },{
        "NombreDelCurso": "Proyecto Web 3",
        "NombreDelGrupo": "Grupo 3",
        "Horario": "Noche",
        "Estudiantes": [{
            "NombreEstudiante" : "Frodo",
    
        },{
            "NombreEstudiante" : "Harry",
     
        }],

        "Profesores": [{
            "NombreProfesor" : "Israel",
            "Rol asignado" : "Proceso"

        },{
            "NombreProfesor" : "Carlos",
            "Rol asignado" : "Factor Humano"
        }],
    }],

    "EstudiantesNormales": [{
        "Estudiante": "Mario Cascante",
        },{
        "Estudiante": "Mariana Cascante",
        },{
        "Estudiante": "Helen Post ",
        },{
        "Estudiante": "Josiah Brandt"
    }],

    "Carreras": [{
        "carrera": "Desarrollo de web",
        "CursosAsignados" : [{
        "curso" : "Curso de nuevo",
        },{
        "curso" : "Curso de x"
        }],

        },{
        "carrera": "Desarrollo de Software",
        "CursosAsignados" : [{
        "curso" : "Curso de progra",
        },{
        "curso" : "Curso de y2k38"
        }],

        },{
        "carrera": "Telematica",
        "CursosAsignados" : [{
        "curso" : "Estos",
        }],
        },{
        "carrera": "TIC",
        "CursosAsignados" : [{
        "curso" : "Curso de estudaintes",
        }],
    }],

    "ProfesoresNormales": [{
        "Profesor": "Jennifer Moralez",
        },{
        "Profesor": "Henrietta Mundo",
        },{
        "Profesor": "Alfonso Collins ",
        },{
        "Profesor": "Robert Smith"
    }]
}

//poner el rango del Profesor
//Mensajes de confirmacion y error
//borrar profes o estudiantes
//proceso teoria factor humano