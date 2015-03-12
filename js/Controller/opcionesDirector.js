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


        $scope.edit = function(valores) {
            var t = $scope.este.datos.RubricasCreadas.indexOf(valores);

            var valorActual = valores;
            $scope.entrada0 = valorActual.NombreDeRubrica;
            $scope.entrada1 = valorActual.NombreDeGrupo;
            $scope.entrada2 = valorActual.Asistencia;
            $scope.entrada3 = valorActual.Concepto;
            $scope.entrada4 = valorActual.Examen1;
            $scope.entrada5 = valorActual.Examen2;
            $scope.entrada6 = valorActual.Tareas;

            $scope.editCreat = function() {

                totalE = Number($scope.entrada2) + Number($scope.entrada3) + Number($scope.entrada4) + Number($scope.entrada5) + Number($scope.entrada6);

                if (totalE === 100) {
                var nuevaRubricaEditada = {
                    "NombreDeRubrica": $scope.entrada0,
                    "NombreDeGrupo" : $scope.entrada1,
                    "Asistencia": $scope.entrada2,
                    "Concepto": $scope.entrada3,
                    "Examen1": $scope.entrada4,
                    "Examen2": $scope.entrada5,
                    "Tareas": $scope.entrada6
                };
                archivos.RubricasCreadas.push(nuevaRubricaEditada);
                $scope.este.datos.RubricasCreadas.splice(t, 1);
                $('.errormsj2').hide();
            }else{
                $('.errormsj2').show();
            }
            }
        }

        $scope.delR = function(valores) {
            var f = $scope.este.datos.RubricasCreadas.indexOf(valores);
            $scope.este.datos.RubricasCreadas.splice(f, 1);
        }

        $scope.add = function() {
            var rubricasPorEnviar = [],
                y = 0,
                total = 0;

            $('.valNot').each(function(){
                rubricasPorEnviar.push($(this).val());
                y ++
            });

            for (y --;y >= 0; y--) {
                total = total + Number(rubricasPorEnviar[y])
                console.log(y)
            };
      
            if (total === 100) {
                var nuevaRubricaCreada = {
                    "NombreDeRubrica": $scope.newNombreRubrica,
                    "NombreDeGrupo" : $scope.newNombreGrupo,
                    "Asistencia": rubricasPorEnviar[0],
                    "Concepto": rubricasPorEnviar[1],
                    "Examen1": rubricasPorEnviar[2],
                    "Examen2": rubricasPorEnviar[3],
                    "Tareas": rubricasPorEnviar[4]
                }
                archivos.RubricasCreadas.push(nuevaRubricaCreada);
                document.getElementById("formAddR").reset();
                $('.errormsj').hide();
                console.log('aqui');
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
        "NombreDeRubrica": "Rubrica 1",
        "NombreDeGrupo" : "Grupo 1",
        "Asistencia": "15",
        "Concepto": "15",
        "Examen1": "30",
        "Examen2": "30",
        "Tareas": "10"
    }, {
        "NombreDeRubrica": "Rubrica 2",
        "NombreDeGrupo" : "Grupo 2",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }, {
        "NombreDeRubrica": "Rubrica 3",
        "NombreDeGrupo" : "Grupo 3",
        "Asistencia": "10",
        "Concepto": "10",
        "Examen1": "15",
        "Examen2": "25",
        "Tareas": "10"
    }],

    "ParamatrosRubrica": [{
        "parametro": "Asistencia"
    }, {
        "parametro": "Concepto"
    }, {
        "parametro": "Examen1"
    }, {
        "parametro": "Examen2"
    }, {
        "parametro": "Tareas"
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